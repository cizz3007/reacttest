import React from 'react';
import * as styles from "./Section06.scss";
import classNames from 'classnames';

const cx = classNames.bind(styles);
class Section06 extends React.Component {
    render() {
        return (
            <div className={cx(styles['sixth-section'], 'section','active')}>
                <div className={styles['sixth-section--desc']}>
                    <div>
                        <h2>PRODUCT DETAILS</h2>
                    </div>
                    <h1>웨어러블 타입의<br/>
                        부담없는 디자인
                    </h1>
                    <p>가벼운 소재, 통기성 밴드로<br/>
                        아이에게 부담이 가지 않습니다.</p>
                </div>
                <div className={styles['sixth-section--bottle-image']}></div>
                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['bottle-cap'])}>
                    <div>
                        <em>체온 표시창</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>
                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['band'])}>
                    <div>
                        <em>통기성 밴드</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>
                <div className={cx(styles['sixth-section--float-txt'], styles['right'], styles['sensor'])}>
                    <div>
                        <em>정밀 온도 센서</em>
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