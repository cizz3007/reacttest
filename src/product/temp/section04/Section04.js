import React from 'react';
import styles from './Section04.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section04 extends React.Component{
    render(){
        return(
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
                        <img src={require('./web-temp-4-icon-1.svg')} alt={'고온 알림  - 아이의 체온이 설정 온도를 벗어나면 보호자의 스마트폰으로 알림을 줍니다.'}/>
                        <div className={styles['fourth-section--spec--box--txt']}>
                            <h3>고온 알림</h3>
                            <p>아이의 체온이 설정 온도를 벗어나면<br/>
                                보호자의 스마트폰으로 알림을 줍니다.</p>
                        </div>
                    </div>
                    <div className={styles['fourth-section--spec--box']}>
                        <img src={require('./web-temp-4-icon-2.svg')} alt={'체온 변화 기록 - 앱은 실시간 체온을 기록하고 분석하여 보기 쉬운 그래프로 나타냅니다.'}/>
                        <div className={styles['fourth-section--spec--box--txt']}>
                            <h3>체온 변화 기록림</h3>
                            <p>앱은 실시간 체온을 기록하고 분석하여<br/>
                                보기 쉬운 그래프로 나타냅니다.</p>
                        </div>
                    </div>
                    <div className={styles['fourth-section--spec--box']}>
                        <img src={require('./web-peepee-4-icon-3.svg')} alt={'해열 조언 - 고온이 감지되면 물수건, 얼음주머니 등 물리적 해열 방법에 대해 조언을 드립니다.'}/>
                        <div className={styles['fourth-section--spec--box--txt']}>
                            <h3>해열 조언</h3>
                            <p>고온이 감지되면 물수건, 얼음주머니 등<br/>
                                물리적 해열 방법에 대해 조언을 드립니다.</p>
                        </div>
                    </div>
                </div>
                <div className={styles['fourth-section--app-image']}></div>
            </div>


        )
    }
}
export default Section04;