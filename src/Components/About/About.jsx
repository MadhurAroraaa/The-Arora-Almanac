import React from 'react'
import styles from './About.module.css'
import aboutImage from '../../assets/about/about.png';
import developerImage from '../../assets/about/developer.png';
import engineerImage from '../../assets/about/engineer.png';
import businessmanImage from '../../assets/about/businessman.png';

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={aboutImage} alt="Me Posing For You" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={businessmanImage} alt="Businessman" />
                        <div className={styles.aboutItemText}>
                            <h3>Businessman</h3>
                            <p>Driven to create value, innovate, and turn ideas into successful ventures.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={developerImage} alt="Developer" />
                        <div className={styles.aboutItemText}>
                            <h3>Full Stack Developer</h3>
                            <p>Creative problem-solver building meaningful digital experiences with a focus on quality and efficiency.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={engineerImage} alt="Engineer" />
                        <div className={styles.aboutItemText}>
                            <h3>AI/ML Engineer</h3>
                            <p>Passionate about turning data into actionable insights and exploring intelligent solutions.</p>
                        </div>
                    </li>

                </ul>
            </div>

        </section>
    )
}