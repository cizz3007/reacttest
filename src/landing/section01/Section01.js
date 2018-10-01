import React from 'react';
import * as styles from './Section01.scss';

class Section01 extends React.Component {
    render() {
        return (
            <section className={styles['video-section']}>
                <div className={styles['video-section--text']}>
                    <p>
                        MEET<br/>
                        THE NEXT LEVEL<br/>
                        PARENTING ASSISTANT<br/>
                    </p>
                    <form method="post" encType={'text/plains'}>
                        <label>
                            <input type="text" name="email"/>
                        </label>
                        <button type="button">NOTIFY ME</button>
                    </form>
                </div>
                <div className={styles['embed-container']}>
                    <div className={styles['scroll-cover']}></div>
                    <iframe id="video" src={'https://player.vimeo.com/video/292042718?background=1'} frameBorder='0'
                            webkitallowfullsscreen="true" mozallowfullscreen="true"
                            allowFullScreen={true}></iframe>
                </div>
            </section>
        )
    }
}

export default Section01;