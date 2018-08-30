import React from 'react';
import * as styles from './Section04.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section04 extends React.Component {
    render() {
        return (
            <div className={cx(styles['fourth-section'], 'section')}>
                <div className={styles['fourth-section--desc']}>
                    <div className={styles['fourth-section--integration']}>
                        <h2>APP INTEGRATION</h2>
                    </div>
                    <h1>기록부터 알림까지<br/>
                        앱으로 받아보세요.</h1>
                </div>
                <div className={styles['fourth-section--spec']}>
                    <div className={styles['fourth-section--spec--box']}>
                        <img src={require('./web-bottle-4-icon-1@2x .png')}/>
                        <div className={styles['fourth-section--spec--box--txt']}>
                            <h3>수유 기록</h3>
                            <p>앱은 실시간 자동으로 수유시간, 횟수 등<br/>
                                상세 데이터를 기록합니다.</p>
                        </div>
                    </div>
                    <div className={styles['fourth-section--spec--box']}>
                        <img src={require('./web-bottle-4-icon-2@2x .png')}/>
                        <div className={styles['fourth-section--spec--box--txt']}>
                            <h3>수유 알림</h3>
                            <p>수유 일지를 작성해주고 <br/>
                                다음 번 수유 시간 전 알림을 줍니다.</p>
                        </div>
                    </div>
                    <div className={styles['fourth-section--spec--box']}>
                        <img src={require('./web-bottle-4-icon-3@2x.png')}/>
                        <div className={styles['fourth-section--spec--box--txt']}>
                            <h3>분유 자동 식별</h3>
                            <p>분유마다 다른 적정 제조 온도를 상품 바코드로<br/>
                                식별해 최적의 온도로 자동 설정해줍니다.</p>
                        </div>
                    </div>
                </div>
                <div className={styles['fourth-section--app-image']}></div>
            </div>
        )
    }
}

export default Section04;

