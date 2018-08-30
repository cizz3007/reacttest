import React from 'react';
import * as styles from './Section06.scss';
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
                    <h1>언제 어디서나<br/>
                        수유하기 쉬운 디자인
                    </h1>
                </div>
                <div className={styles['sixth-section--bottle-image']}></div>

                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['bottle-cap'])}>
                    <div>
                        <em>보틀 캡</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['handle'])}>
                    <div>
                        <em>핸들</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['straw'])}>
                    <div>
                        <em>스트로</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['left'], styles['smart-base'])}>
                    <div>
                        <em>스마트베이스</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['right'], styles['nipple'])}>
                    <div>
                        <em>실리콘 젖꼭지</em>
                        <span className={styles['sixth-section--float-txt__circle']}>
                            <span></span>
                        </span>
                        <span className={styles['sixth-section--float-txt__bar']}>
                        </span>
                    </div>
                </div>

                <div className={cx(styles['sixth-section--float-txt'], styles['right'], styles['glass'])}>
                    <div>
                        <em>강화유리몸체</em>
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