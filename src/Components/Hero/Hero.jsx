import React from 'react'
import styles from './Hero.module.css'
import heroImage from '../../assets/hero/hero.png';

export const Hero = () => {return(
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Namaste <br />I’m Madhur Arora</h1>
            <h2 className={styles.description}>This space is my Almanac <br /> 
            a chronicle of work, vision, and progress.</h2>
            <a href="mailto:aroramadhur0248@gmail.com" className={styles.contactBtn}>Get in touch</a>
        </div>
        <img src={heroImage} alt="Me Doing Some Work" className={styles.heroImage} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
)}
    