import { Link, Outlet, useSearchParams } from "react-router-dom";
import styles from "./NoteList.module.css"

function NoteList({ list }) {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className={styles.noteList}>
            <div>
                <nav className={styles.nav}>

                    <input className={styles.input} placeholder={'Search note by title'}
                        value={searchParams.get("filter") || ""}
                        onChange={event => {
                            let filter = event.target.value;
                            if (filter) {
                                setSearchParams({ filter }); // { filter: filter }
                            } else {
                                setSearchParams({ "filter": "" });
                            }
                        }}
                    />
                    {list
                        .filter(member => {
                            let filter = searchParams.get("filter");
                            if (!filter) return true;
                            let title = member.title.toLowerCase();
                            return title.startsWith(filter.toLowerCase());
                        })
                        .map((member) => (
                            <Link className={styles.link}
                                to={`/list/${member.id}`}
                                key={member.id}
                            >
                                {member.title}
                            </Link>

                        ))}
                </nav>
            </div>

            <Outlet />
        </div>
    );
}
export default NoteList;