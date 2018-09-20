import React from 'react';
import * as styles from "./Section06.scss";
import classNames from 'classnames';

const cx = classNames.bind(styles);
class Section06 extends React.Component {
    render() {
        return (
            <div className={cx(styles['sixth-section'], 'section')}>
                <div className={styles['sixth-section--desc']}>
                    <div>
                        <h2>PRODUCT DETAILS</h2>
                    </div>
                    <h1>부담 가지 않는<br/>
                        초경량 슬림 디자인
                    </h1>
                    <p>두께 7밀리 무게 6그램의 가벼움으로<br/>
                        아이에게 부담이 가지 않습니다.</p>
                </div>
                <div className={styles['sixth-section--bottle-image']}></div>
                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['sensor'])}>
                    <div>
                        <em>고감도 센서</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>
                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['proof'])}>
                    <div>
                        <em>IP67 방수</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>
                <div className={cx(styles['sixth-section--float-txt'], styles['right'], styles['material'])}>
                    <div>
                        <em>안전한 소재</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section06;