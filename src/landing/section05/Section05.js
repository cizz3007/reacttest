import React from 'react';
import styles from './Section05.scss';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

const cx = classNames.bind(styles);
import $ from 'jquery';
import Section03 from "../../promotion/section3/Section03";

window.jQuery = $;
window.$ = $;
require('../../library/bxslider.min');

class Section05 extends React.Component {

    componentDidMount() {
        const slider = '.' + styles['slider'];

        $(slider).bxSlider({
            touchEnabled: true,
            responsive: true,
            pager: true,
            infiniteLoop: true,
            onSliderLoad: function () {

            },
            onSlideNext: function (e) {

            },
            onSlidePrev: function (e) {

            },
        });


    }


    render() {
        return (
            <section className={styles['lower-slider-section']}>
                <div className={styles['slider']}>
                    <div>
                        <div className={styles['lower-slider-section--title']}>
                            <h2>PARENTING REPORTS</h2>
                        </div>
                        <div className={styles['lower-slider-section--desc']}>
                            <h1>All parenting information at a glance<br/>
                                - Healthcare Report
                            </h1>
                            <p>Check collected data such as feeding Statistics,<br/>
                                Feeding Alerts, Milk Consumption at your fingertip</p>
                        </div>
                        <img src={require('./con05_01.png')} className={styles['__slider-1--image']}/>
                    </div>
                    <div>
                        <section className={styles["third-section"]}>
                            <ul className={styles['third-section--content']}>
                                <li className={cx(styles['third-section--content--list'], styles['health-care'])}>
                                    <div>
                                        <img src={require('./ic-healthcare.svg')} alt="메인페이지의 헬스케어 소개 아이콘입니다."/>
                                        <h1>Healthcare</h1>
                                        <p>You can check the health condition of your baby through data collected by IoT devices. Also, we offer parenting consultation and helpful tips through our affiliated professionals.</p>
                                    </div>
                                </li>
                                <li className={cx(styles["third-section--content--list"], styles['community'])}>
                                    <div>
                                        <img src={require('./ic-community.svg')} alt="메인페이지의 커뮤니티 소개 아이콘입니다."/>
                                        <h1>Community</h1>
                                        <p>We provide a space where parents can freely share parenting tips or write review on baby products. Or you can simply post the pictures of your little one.</p>
                                    </div>
                                </li>
                                <li className={cx(styles["third-section--content--list"], styles['shopping'])}>
                                    <div>
                                        <img src={require('./ic-shopping.svg')} alt="메인페이지의 쇼핑 소개 아이콘입니다."/>
                                        <h1>Shopping</h1>
                                        <p>Utilizing patented algorithm, we offer smart subscription commerce. We will deliver baby products such as diaper or formula to your doorstep and even adjust the size, step, and quantity automatically according to your baby’s needs.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div>
                        <div className={cx(styles['other-product-section'], 'section')}>
                            <div className={styles['other-product-section--desc']}>
                                <div>
                                    <h2>SMART SERIES</h2>
                                </div>
                                <h1>다른 제품 둘러보기</h1>
                            </div>
                            <div className={styles['other-product-section--products']}>
                                <div className={styles['pee-pee']}>
                                    <div className={styles["other-product-section--products--image"]}></div>
                                    <h5>스마트 피피<br/>(배변 알리미)</h5>
                                    <p>유아의 배변활동을 감지하여<br/>
                                        한 눈에 알아볼 수 있는<br/>
                                        배변 리포트를 제공합니다.</p>
                                    <button type={'button'} role={'button'}>둘러보기</button>

                                </div>
                                <div className={styles['bottle']}>
                                    <div className={styles["other-product-section--products--image"]}></div>
                                    <h5>스마트 보틀<br/>(젖병)</h5>
                                    <p>온도, 수유자세 등을 감지하여<br/>
                                        한 눈에 알아볼 수 있는<br/>
                                        수유 리포트를 제공합니다.</p>
                                    <button type={'button'} role={'button'}>둘러보기</button>
                                </div>
                                <div className={styles['temp']}>
                                    <div className={styles["other-product-section--products--image"]}></div>
                                    <h5>스마트 템프<br/>(체온계)</h5>
                                    <p>유아의 체온을 감지하여<br/>
                                        한 눈에 알아볼 수 있는<br/>
                                        체온변화 리포트를 제공합니다.</p>
                                    <button type={'button'} role={'button'}>둘러보기</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Section05;