import React from 'react';
import * as styles from './Section04.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section04 extends React.Component {
    render() {
        return (
            <div className={cx(styles['fourth-section'], 'section', 'active')}>
                <div className={styles['fourth-section--desc']}>
                    <div className={styles['fourth-section--integration']}>
                        <h2>APP INTEGRATION</h2>
                    </div>
                    <h1>기록부터 알림까지<br/>
                        앱으로 받아보세요.</h1>
                </div>
                <div>
                    <div>
                        <img src={require('./web-bottle-4-icon-1@2x .png')}/>
                        <div>
                            <h3>수유기록</h3>
                            <p>앱은 실시간 자동으로 수유시간, 횟수 등
                                상세 데이터를 기록합니다.</p>
                        </div>
                        <div>
                            <h3>수유기록</h3>
                            <p>앱은 실시간 자동으로 수유시간, 횟수 등
                                상세 데이터를 기록합니다.</p>
                        </div>
                        <div>
                            <h3>수유기록</h3>
                            <p>앱은 실시간 자동으로 수유시간, 횟수 등
                                상세 데이터를 기록합니다.</p>
                        </div>
                    </div>
                    <div className={styles['']}></div>
                </div>
            </div>
        )
    }
}

export default Section04;

