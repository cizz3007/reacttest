import React from 'react';
import * as styles from "../../bottle/section02/Section02.scss";
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
                    <h1 className={styles['second-section-desc--title']}>바로 알려주는<br/> 똑똑한 배변 알리미</h1>
                    <p className={styles['second-section-desc--paragraph']}>스마트피피는 아기의 배변활동을 감지하여<br/>정확한 기저귀 교체 시기를 알려드립니다.</p>
                </div>
                <div className={styles['second-section-spec']}>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-peepee-2-icon-1@2x.png')}
                             alt="제공되는 패치에 부착하여 기저귀 종류에 관계 없이손쉽게 사용할 수 있습니다."/>
                        <div>
                            <h3>손쉬운 사용</h3>
                            <p>제공되는 패치에 부착하여<br/>
                                기저귀 종류에 관계 없이<br/>
                                손쉽게 사용할 수 있습니다.</p>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-peepee-2-icon-2@2x.png')} alt={'배변활동이 감지되면 보호자의 스마트폰 앱을 통해 알림을 줍니다.'}/>
                        <div>
                            <h3>실시간 배변 알림</h3>
                            <div>
                                <p>배변활동이 감지되면<br/>
                                    보호자의 스마트폰<br/>
                                    앱을 통해 알림을 줍니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-peepee-2-icon-3@2x.png')} alt={'배변활동을 수집하고 기록하여 아기의 다음번 배변 시점을 예측할 수 있도록 돕습니다.'}/>
                        <div>
                            <h3>지능형 분석</h3>
                            <p>배변활동을 수집하고 기록하여<br/>
                                아기의 다음번 배변 시점을<br/>
                                예측할 수 있도록 돕습니다.</p>
                        </div>
                    </div>
                    <div className={styles['second-section-spec--container']}>
                        <img src={require('./web-peepee-2-icon-4@2x.png')} alt={'배변 시점을 제때 파악하여 기저귀 발진의 위험을 현저히 감소시켜 줍니다.'}/>
                        <div>
                            <h3>정밀한 옥도 측정</h3>
                            <p>배변 시점을 제때<br/>
                                파악하여 기저귀 발진의 위험을<br/>
                                현저히 감소시켜 줍니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section02;