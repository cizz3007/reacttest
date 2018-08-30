import React from 'react';
import * as styles from './Section07.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);


class Section07 extends React.Component {
    render() {
        return (
            <div className={cx(styles['seventh-section'], 'section')}>
                <div className={styles['seventh-section--bottle-image']}>
                    스마트보틀의 하단 이미지부분 입니다.
                </div>
                <div className={styles['seventh-section--desc']}>
                    <h1>
                        첨단 IoT로<br/>
                        안전하고 똑똑하게
                    </h1>
                    <p>
                        온도 센서, 가속도 센서, 히팅플레이트,<br/>
                        저전력블루투스와 특허 알고리즘 내장
                    </p>
                </div>
            </div>
        )
    }
}

export default Section07;