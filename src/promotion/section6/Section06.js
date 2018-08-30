import React from 'react';
import * as styles from './Section06.scss';

class Section06 extends React.Component {
    render() {
        return (
            <section className={styles['seventh-section']}>
                <div className={styles['seventh-section--txt']}>
                    <h1>Smart-Peepee</h1>
                    <p>Missed another diaper change because your baby is too patient (or even too impatient)?<br/> Use our <em>Smart-Peepee</em> and get alarms right on time when they, you know, go.<br className={styles['mobile-break']}/> Smart-Peepee will help
                        prevention of diaper rashes and keep it dry and comfy.</p>
                </div>
                <svg viewBox="0 0 324 330" width="324" height="330" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="6.95%" y1="16.146%" x2="96.282%" y2="63.497%" id="Fo">
                            <stop stopColor="#24FCD2" offset="0%"/>
                            <stop stopColor="#51C8DD" offset="100%"/>
                        </linearGradient>
                    </defs>
                    <path
                        d="M307.507 101.809c-2.988-4.552-6.63-8.512-10.267-12.413 0 0-59.628-68.006-160.697-86.73-27.67-6.372-58.199-1.43-84.18 15.994C26.38 36.084 10.401 62.61 5.854 90.566-14.67 191.21 25.341 271.958 25.601 272.348a106.605 106.605 0 0 0 7.795 14.043c24.812 36.799 70.54 51.492 112.63 39.53 0 0 68.202-16.774 144.718-92.842 36.245-34.588 44.434-90.051 16.763-131.27z"
                        fill="url(#Fo)" fillRule="nonzero" opacity=".85"/>
                </svg>
            </section>
        )
    }
}

export default Section06;