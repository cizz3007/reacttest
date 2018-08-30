import React from 'react';
import styles from './Section08.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Section08 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false
        };

        /*메서드 바인딩 꼭 해주자..*/
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(function () {
            return {
                active: !this.state.active
            }

        });
    }


    render() {
        return (
            <div className={cx(styles['eighth-section'], 'section', 'active')}>
                <div className={styles['eighth-section--desc']}>
                    <div>
                        <h2>PRODUCT SPECIFICATION</h2>
                    </div>
                    <h1>스마트 보틀 제품사양</h1>
                </div>
                <div className={styles['eighth-section--spec']}>
                    <div className={styles['eighth-section--spec--image']}></div>
                    <ul className={styles['eighth-section--spec--desc']}>
                        <li className={styles['eighth-section--spec--desc--list']}>
                            <h4>앱호환</h4>
                            <span>Android 4.3 이상</span>
                        </li>
                        <li className={styles['eighth-section--spec--desc--list']}>
                            <h4>크기</h4>
                            <span>70*23.5mm</span>
                        </li>
                        <li className={styles['eighth-section--spec--desc--list']}>
                            <h4>용량</h4>
                            <span>160 / 240ml</span>
                        </li>
                        <li className={styles['eighth-section--spec--desc--list']}>
                            <h4>재질</h4>
                            <span>실리콘, 유리, ABS</span>
                        </li>
                        <li className={styles['eighth-section--spec--desc--list']}>
                            <h4>통신방식</h4>
                            <span>블루투스 4.0</span>
                        </li>
                        <li className={styles['eighth-section--spec--desc--list']}>
                            <h4>충전규격</h4>
                            <span>5V 2A</span>
                        </li>
                        <li className={styles['eighth-section--spec--desc--list']}>
                            <h4>배터리용량</h4>
                            <span>180 mAh</span>
                        </li>
                        <li className={cx(styles['authentication-list'], {active: this.state.active})}
                            onClick={this.handleClick}>
                            <div>{this.state.active}</div>
                        </li>
                    </ul>
                </div>
                <div className={cx(styles['kc'], this.state.active === true ? styles['active'] : null)}
                     onClick={this.handleClick}>
                    <div className={styles['kc-image']}></div>
                    <div className={styles['kc-spec']}>
                        <div>
                            <h5>상호 :</h5>
                            <span></span>
                        </div>
                        <div>
                            <h5>기자재명칭 :</h5>
                            <span>특정소출력무선기기</span>
                        </div>
                        <div>
                            <h5>모델명 :</h5>
                            <span>NP1881</span>
                        </div>
                        <div>
                            <h5>인증번호 :</h5>
                            <span>R-CMM-BK0-NP188I</span>
                        </div>
                        <div>
                            <h5>제조연월 :</h5>
                            <span>별도표기</span>
                        </div>
                        <div>
                            <h5>제조자/제조국가 :</h5>
                            <span>리틀원/중국</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section08;




