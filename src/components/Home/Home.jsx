import { NavLink, Outlet } from 'react-router-dom';
import styles from "./Home.module.css"

export default function Home() {

    const appInfo = 
    "Welcome to my note Taking Application"

    return (
        <>
            <main>
                <div className={styles.main}>
                    <header className={styles.header}>
                        <h1 >React Note Taking Application</h1>
                    </header>

                    <nav className={styles.navBar}>
                        <NavLink className={styles.nav} to="">Home</NavLink> {" "}
                        <NavLink className={styles.nav} to="about">About</NavLink> {" "}
                        <NavLink className={styles.nav} to="list">NoteList</NavLink> {!appInfo} {" "}
                    </nav>
                </div>
                if (NoteList)
                <Outlet />
                <div>
                    {/* <h1>{appInfo}</h1> */}
                </div>
            </main>
        </>
    )
}

 
