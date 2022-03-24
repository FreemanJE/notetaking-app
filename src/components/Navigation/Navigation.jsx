import React from 'react'
import styles from '../Home/Home.module.css';
import {NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <main className={styles.main} >
            <div >
                <header className={styles.header}>
                    <h1 >React Note Taking Application</h1>
                </header>

                <nav className={styles.navBar}>
                    <NavLink className={styles.nav} to="/">Home</NavLink> {" "}
                    {/* <NavLink className={styles.nav} to="about">About</NavLink> {" "} */}
                    <NavLink className={styles.nav} to="/list">NoteList</NavLink>  {" "}
                </nav>
            </div>           
           
        </main>
    )
}

export default Navigation