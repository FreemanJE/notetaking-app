import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react"
import styles from "./NoteView.module.css"
import NewNote from '../NewNotes/NewNote'

const NoteView = ({ list, setList }) => {
    const [inputValue, setInputValue] = useState('')
    const [edit, setEdit] = useState(false)
    const [add, setAdd] = useState(false)


    const inputRef = useRef()

    let { id } = useParams();
    const navigate = useNavigate();

    const deleteList = (id) => {
        const newList = list.filter(member => member.id !== id)
        setList(newList);
        console.log(newList)
        navigate("/list")
    };

    const addList = (newN) => {
       
        setAdd(!add)
    }
    console.log(list)

    const getList = function (id) {
        return list.find(member => member.id === id);
    }

    let listDetail = getList(id);

    const changeTextArea = (e) => {
        inputRef.current.focus()
        setInputValue(e.target.value)
    }

    useEffect(() => {
        setInputValue(listDetail.body)

    }, [id, listDetail.body])

    const submitHandler = (e) => {
        if (edit) {
            let noteIndex = list.findIndex(note => note.id === id)
            let newCopy = [...list]
            newCopy[noteIndex].body = inputValue
            setList(newCopy)
            console.log(noteIndex)
            setEdit(false)
        }
        else {
            setEdit(true)
        }
    };
    const View = <div className={styles.view} >
        <h2>{listDetail.title}</h2>
        <p>{listDetail.time}</p>
        {!edit ? <p>{listDetail.body}</p> : <textarea ref={inputRef} onChange={changeTextArea} name="" id="" cols="" rows="10" value={inputValue} />}

    </div>
    const display = add ? <NewNote list= {list} addList={addList} setList= {setList} setAdd={setAdd} /> : View

    return (
        <main className={styles.main}>

            <button
                onClick={() => {
                    deleteList(id);
                    // navigate("/list");
                }}
            >
                Delete
            </button>
                {!add?(<button onClick={addList}
            >Add Note
            </button>):(<></>)}
            {/* <button onClick={addList}
            >Add Note
            </button> */}

            <button
                onClick={submitHandler}
            >{edit ? "Save Note" : "Edit Note"}
            </button>

            {display}
          

        </main>
    );
};

export default NoteView