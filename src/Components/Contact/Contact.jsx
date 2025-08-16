import React from 'react'
import styles from './Contact.module.css'
import emailImage from '../../assets/contact/emailIcon.png';
import githubImage from '../../assets/contact/githubIcon.png';
import linkedinImage from '../../assets/contact/linkedinIcon.png';

export const Contact = () => {
    return (<footer id='contact'className={styles.container}>
        <div className={styles.text}>
            <h2>Say Namaste </h2>
            <p>Open to opportunities, collaborations, and discussions in tech and business. Let’s connect and make things happen.</p>
        </div>
        <ul className={styles.links}> 
            <li className={styles.link}>
                <img src={emailImage} alt="Email" />
                <a href="mailto:aroramadhur0248@gmail.com">aroramadhur0248@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={githubImage} alt="Github" />
                <a href="https://github.com/MadhurAroraaa">Github</a>
            </li>
            <li className={styles.link}>
                <img src={linkedinImage} alt="LinkedIn" />
                <a href="linkedin.com/in/madhur-arora-37269a349">LinkedIn</a>
            </li>
        </ul>
    </footer>


    )
}