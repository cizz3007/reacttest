import React from 'react';
import * as styles from './Section04.scss';


class Section04 extends React.Component {
    render() {
        return(
            <section className={styles['fourth-section']}>
                <div className={styles['fourth-section--article']}>
                    <div>
                        <h1>Blissful Innovation<br/><em>— Introducing our line of smart devices.</em></h1>
                        <p>Use Littleone’s smart series to monitor and provide care for your<br/> baby anywhere and anytime. Safety and well-being of a child<br/> translates to parents’ joy.</p>
                    </div>
                </div>
                <div className={styles['fourth-section--mobile']}>
                    <div className={styles['fourth-section--mobile--devices']}>리틀원의 디바이스 제품군 사진입니다.</div>
                    <div className={styles['fourth-section--mobile--mobile']}>리틀원 앱 어플리케이션의 사진입니다.</div>
                    <div className={styles['fourth-section--mobile--pictures']}>리틀원의 갤러리 사진 나열 입니다.</div>
                </div>
            </section>
            )

    }
}

export default Section04;
