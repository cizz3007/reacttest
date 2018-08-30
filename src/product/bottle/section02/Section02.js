import React from 'react';
import * as styles from './Section02.scss';
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
                    <h1 className={styles['second-section-desc--title']}>편안한 수유를 돕는<br/> 똑똑한 젖병</h1>
                    <p className={styles['second-section-desc--paragraph']}>스마트보틀은 온도, 수유 자세 등을 감지하여<br/> 더 안전하고 편안하게
                        수유할 수 있도록 도와줍니다.</p>
                </div>
                <div className={styles['second-section-spec']}>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-bottle-2-icon-1@2x.png')} alt={'자동 보온'}/>
                        <div>
                            <h3>자동 보온</h3>
                            <p>상시 전원 연결 시 최적 온도로
                                분유를 보온해 아이가 원하는 시간에
                                수유할 수 있습니다.</p>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-bottle-2-icon-2@2x.png')} alt={'자동 보온'}/>
                        <div>
                            <h3>화상 방지</h3>
                            <div>
                                <p>분유의 온도가 너무 높은 상태로<br/>
                                    수유를 시도할 경우<br/>
                                    진동으로 위험을 알립니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-bottle-2-icon-3@2x.png')} alt={'자동 보온'}/>
                        <div>
                            <h3>수유 자세 교정</h3>
                            <p>수유자세가 부적정해<br/>
                                공기 과다 흡입 가능성이 있을 경우<br/>
                                진동으로 알립니다.</p>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-bottle-2-icon-4@2x.png')} alt={'자동 보온'}/>
                        <div>
                            <h3>정밀한 옥도 측정</h3>
                            <p>정밀 센서를 통한 수온 측정으로<br/>
                                영양소 유실 걱정을<br/>
                                줄일 수 있습니다.</p>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Section02;