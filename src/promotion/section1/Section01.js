import React from 'react'
import * as styles from './Section01.scss';

class Section01 extends React.Component {

    render() {
        return (
            <section className={styles['main-section']}>
                <div className={styles['main-section--content']}>
                    <div className={styles['main-section--content', 'outer']}>
                        <div className={styles['main-section--content', 'inner']}>
                            <div className={styles['main-section--content', 'centered']}>
                                <div></div>
                                <div className={styles['main-section--content--text']}>
                                    <div className={styles['main-section--content--text__upper']}>
                                        <h1>LITTLEONE</h1>
                                        <p>The next level parenting platform</p>
                                    </div>
                                    <div className={styles['main-section--content--text__lower']}>
                                        <p>Let us help you with the hard work.</p>
                                        <p>Take care of your precious little one <br/>in a smart and secure way.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 672 686" width="672" height="686" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="turb">
                            <feTurbulence id="turbwave" type="fractalNoise" baseFrequency="0.03" numOctaves="4"
                                          result="turbulence_3"/>
                            <feDisplacementMap xChannelSelector="B" yChannelSelector="G" in="SourceGraphic"
                                               in2="turbulence_3" scale="60"/>
                        </filter>
                        <linearGradient x1="6.116%" y1="6.905%" x2="95.02%" y2="91.749%" id="a">
                            <stop stopColor="#00FFCD" offset="0%"/>
                            <stop stopColor="#00D4E4" offset="100%"/>
                        </linearGradient>
                        <linearGradient x1="1.879%" y1="40.27%" x2="110.506%" y2="40.27%" id="b">
                            <stop stopColor="#B620B4" offset="0%"/>
                            <stop stopColor="#AD23B5" offset="22.81%"/>
                            <stop stopColor="#952BB8" offset="59.66%"/>
                            <stop stopColor="#7437BC" offset="100%"/>
                        </linearGradient>
                        <radialGradient cx="-19.513%" cy="89.587%" fx="-19.513%" fy="89.587%" r="138.179%"
                                        gradientTransform="matrix(.86491 -.47216 .47005 .89443 -.447 .002)" id="c">
                            <stop stopColor="#B620B4" offset="0%"/>
                            <stop stopColor="#3726AF" offset="100%"/>
                        </radialGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd" opacity=".9">
                        <path
                            d="M642.444 181.452c-5.324-8.095-11.342-15.497-17.823-22.436 0 0-106.245-120.967-286.329-154.274-49.303-11.334-103.699-2.544-149.993 28.45-46.294 30.993-74.765 78.177-82.866 127.906-36.573 179.023 34.72 322.658 35.183 323.352 3.935 8.558 8.565 16.884 13.888 24.98 44.211 65.456 125.689 91.593 200.685 70.314 0 0 121.522-29.838 257.859-165.146 64.58-61.524 78.7-159.825 29.396-233.146z"
                            fill="url(#a)"/>
                        <path
                            d="M532 413.25c0-8.784-.695-17.336-2.084-25.889 0 0-18.76-144.236-136.88-260.041C361.77 94.034 316.374 73 265.884 73c-50.49 0-95.885 20.803-126.92 54.089C21.076 242.663 2.084 386.436 2.084 387.129.694 395.452 0 404.005 0 412.788c0 71.425 48.174 131.986 115.108 153.945 0 0 106.308 38.833 277.002 6.24C471.55 559.798 532 493.228 532 413.25z"
                            fill="url(#b)"/>
                        <path
                            d="M538.295 195.048a164.007 164.007 0 0 0-24.092-9.711s-137.368-48.56-294.428 4.393c-43.55 12.95-82.93 43.934-105.632 88.794-22.702 44.859-24.555 94.805-9.035 137.583 50.037 157.239 170.032 239.095 170.727 239.558a150.93 150.93 0 0 0 22.007 13.411c63.935 32.373 139.917 16.649 189.722-33.066 0 0 82.699-77.232 130.65-243.951 23.86-77-8.339-160.707-79.919-197.01z"
                            fill="url(#c)"/>
                    </g>
                </svg>
            </section>
        )
    }


}

export default Section01;