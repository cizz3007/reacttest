import React from 'react';
import styles from './Section03.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section03 extends React.Component{
    render(){
        return(
            <div className={cx(styles['third-section'], 'section')}>
                <div className={styles['third-section--desc']}>
                    <div className={styles['third-section--desc--integration']}>
                        <h2>APP INTEGRATION</h2>
                    </div>
                    <h1>앱 연동으로<br/>
                        연속 체온 관리!</h1>
                    <p>스마트템프와 실시간 연동되는 앱을 통해<br/>
                        고온 알림, 체온 변화 추적이 가능합니다.</p>
                </div>
                <div className={styles['third-section--progress']}>
                    <div>
                        <img className={styles['third-section--progress--device']}
                             src={require('./web-temp-3-icon-1.svg')} alt={'스마트템프와 앱의 연동'}/>
                        <span>스마트템프</span>
                    </div>
                    <div>
                        <img className={styles['third-section--progress--data']}
                             src={require('./web-bottle-3-date.svg')} alt={'스마트템프와 앱의 연동'}/>
                    </div>
                    <div>
                        <img className={styles['third-section--progress--device']}
                             src={require('./web-temp-3-icon-2.svg')} alt={'스마트템프와 앱의 연동'}/>
                        <span>앱/웹</span>
                    </div>
                    <div>
                        <img className={styles['third-section--progress--data']}
                             src={require('./web-bottle-3-platform.svg')} alt={'스마트템프와 앱의 연동'}/>
                    </div>
                    <div>
                        <img className={styles['third-section--progress--device']}
                             src={require('./web-temp-3-icon-3.svg')} alt={'스마트템프와 앱의 연동'}/>
                        <span>보호자</span>
                    </div>
                    <span className={styles['horizon-bar']}></span>
                </div>
                <div className={styles['third-section--devices']}>
                    <img src={require('./web-temp-3-smart-temp@2x.png')} alt={'스마트 템프'}/>
                    <img src={require('./web-temp-3-mobile@2x.png')} alt={'앱 어플리케이션의 이미지'}/>
                </div>
            </div>
        )
    }
}
export default Section03