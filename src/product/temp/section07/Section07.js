import React from 'react';
import styles from './Section07.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section07 extends React.Component{
    render(){
        return(
            <div className={cx(styles['seventh-section'], 'section')}>
                <div className={styles['seventh-section--desc']}>
                    <div className={styles['seventh-section--desc--app-integration']}>
                        <h2>PRODUCT DETAIL</h2>
                    </div>
                    <h1>
                        기존 체온계의<br/>
                        단점을 보완
                    </h1>
                    <p>
                        지속적인 체온 측정과 고온 알림, 편리한 기록 확인<br/>
                        건전지 교체형으로 반영구적인 사용
                    </p>
                </div>
                <div className={styles['seventh-section--temp-image']}>
                    스마트 템프 - 지속적인 체온 측정과 고온 알림, 편리한 기록 확인 건전지 교체형으로 반영구적인 사용
                </div>
            </div>
        )
    }
}

export default Section07;