import { useState, useEffect } from 'react'
import uniqid from 'uniqid';
import styles from './NewNote.Module.css';



const NewNote = ({ list, setList, setAdd,addList}) => {
    console.log(list)
    const [title, setTitle] = useState('')
    const [body, setBody ] = useState('')
    const [newNote, setNewNote] = useState({
        id: '', 
        title: '', 
        body: '', 
        time: ''
    })
    const getDateTime = () => {
        let today = new Date();
        let date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        let time =
          today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + " " + time;
      };

      useEffect(() => {
          setNewNote({...newNote, id: uniqid(),time: getDateTime(), title: title, body: body})
      },[body])

    const saveNewNote = () => {
        const copyList = [...list]
        copyList.push(newNote)
        setList(copyList)
        setAdd(false)

    }

    return (
        <div className= {styles.main1} >
            NewNote
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <textarea rows="10" cols="18" onChange={(e) => setBody(e.target.value)} value={body} />
            <button onClick={saveNewNote} >save</button>
        </div>
    )
}

export default NewNote