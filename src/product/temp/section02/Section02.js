import React from 'react';
import styles from './Section02.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section02 extends React.Component {
    render() {
        return (
            <div className={cx(styles['second-section'], 'section')}>
                <div className={styles['second-section-desc']}>
                    <div className={styles['second-section-desc--sub']}>
                        <h2>INTERNET OF BABIES</h2>
                    </div>
                    <h1 className={styles['second-section-desc--title']}>웨어러블 타입의<br/> 똑똑한 체온계</h1>
                    <p className={styles['second-section-desc--paragraph']}>스마트템프는 실시간 체온 변화를 감지하여 <br/>혹시 모를 이상 징후로부터
                        소중한 아이를 지켜줍니다.</p>
                </div>
                <div className={styles['second-section-spec']}>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-temp-2-icon-1.svg')} alt="저전력 블루투스 통신으로 연동앱에 체온 변화 추이를 송신하며 설정 온도 이상 시 알림을 줍니다."/>
                        <div>
                            <h3>상시 모니터링</h3>
                            <p>저전력 블루투스 통신으로<br/>
                                연동앱에 체온 변화 추이를 송신하며<br/>
                                설정 온도 이상 시 알림을 줍니다.</p>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-temp-2-icon-2.svg')} alt="디바이스의 디스플레이로 체온 및 배터리 잔량 확인 가능합니다."/>
                        <div>
                            <h3>간편한 확인</h3>
                            <div>
                                <p>디바이스의 디스플레이로<br/>체온 및 배터리 잔량<br/>확인 가능합니다.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-temp-2-icon-3.svg')} alt="고정밀 온도 센서 탑재로 오차 없이 정확하게 체온을 잴 수 있습니다."/>
                        <div>
                            <h3>정확한 측정</h3>
                            <p>고정밀 온도 센서 탑재로<br/>
                                오차 없이 정확하게<br/>
                                체온을 잴 수 있습니다.</p>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-temp-2-icon-4.svg')} alt="열기와 습기를 효과적으로 방출하고 알러지로부터 민감한 아기 피부를 보호합니다."/>
                        <div>
                            <h3>통기성 밴드</h3>
                            <p>열기와 습기를 효과적으로<br/>
                                방출하고 알러지로부터<br/>
                                민감한 아기 피부를 보호합니다.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Section02;