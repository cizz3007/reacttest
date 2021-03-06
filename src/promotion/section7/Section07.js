import React from 'react';
import * as styles from './Section07.scss';

class Section07 extends React.Component {
    render() {
        return (
            <section className={styles['twelfth-section']}>
                <div className={styles['twelfth-section--article']}>
                    <div className={styles['twelfth-section--article--text']}>
                        <h1>Smart-Temp</h1>
                        <p>
                            You can never worry too much when it comes to your baby’s health. <em>Smart-Temp</em> will monitor
                            your baby’s body temperature around the clock and alert you. You can manage and respond
                            promptly when the baby needs help.
                        </p>
                    </div>
                </div>
                <svg width="566" height="576" xmlns="http://www.w3.org/2000/svg" className="desktop-svg"
                     viewBox="0 0 566 576">
                    <defs>
                        <filter id="turb">
                            <feTurbulence id="turbwave" type="fractalNoise" baseFrequency="0.03" numOctaves="2"
                                          result="turbulence_3"/>
                            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic"
                                               in2="turbulence_3"
                                               scale="40"/>
                        </filter>
                        <linearGradient x1="-.199%" y1="52.915%" x2="98.852%" y2="48.789%" id="svg-section-12">
                            <stop stopColor="#B620B4" offset="0%"/>
                            <stop stopColor="#AD23B5" offset="22.81%"/>
                            <stop stopColor="#952BB8" offset="59.66%"/>
                            <stop stopColor="#7437BC" offset="100%"/>
                        </linearGradient>
                    </defs>
                    <path
                        d="M825.189 427.702c-5.22-7.944-11.583-14.857-17.937-21.666 0 0-104.165-118.7-280.723-151.383-48.338-11.121-101.669-2.497-147.057 27.916-45.387 30.413-73.3 76.713-81.244 125.51-35.856 175.668 34.041 316.611 34.495 317.292 3.858 8.398 8.397 16.569 13.616 24.512 43.346 64.23 123.228 89.877 196.756 68.997 0 0 119.143-29.279 252.81-162.051 63.316-60.372 77.622-157.18 29.284-229.127z"
                        transform="translate(-288 -250)" fill="url(#svg-section-12)" opacity=".8"/>
                </svg>

            </section>

        )
    }
}

export default Section07;