import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <main className={styles.main3}>
      <h1>About this app</h1>
      <ul>
        <li>✔ You can View notes as a summarized list</li>
        <li>✔ Select notes and view the title and body
        </li>
        <li>✔ Add notes</li>
        <li>✔ Delete notes</li>
      </ul>

    </main>
  )
}

export default About