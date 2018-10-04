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
        let bxSlider = $(slider).bxSlider({
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
        let windowSize = $(window).width();

        $(window).on('resize', function (e) {
            windowSize = $(window).width();
            bxSlider.reloadSlider();

            if (windowSize > 1024) {

            }
            if (windowSize < 1024) {
                bxSlider.destroySlider();
            }

        });
        if (windowSize > 1024) {
            bxSlider;
        }


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
                            <div className={styles['third-section--desc']}>
                                <div>
                                    <h2>LITTLEONE PLATFORM</h2>
                                </div>
                                <h1>The next level parenting platform</h1>
                            </div>
                            <ul className={styles['third-section--content']}>
                                <li className={cx(styles['third-section--content--list'], styles['health-care'])}>
                                    <div>
                                        <img src={require('./ic-healthcare.svg')} alt="메인페이지의 헬스케어 소개 아이콘입니다."/>
                                        <h1>Healthcare</h1>
                                        <p>You can check the health condition of your baby through data collected by IoT
                                            devices. Also, we offer parenting consultation and helpful tips through our
                                            affiliated professionals.</p>
                                    </div>
                                </li>
                                <li className={cx(styles["third-section--content--list"], styles['community'])}>
                                    <div>
                                        <img src={require('./ic-community.svg')} alt="메인페이지의 커뮤니티 소개 아이콘입니다."/>
                                        <h1>Community</h1>
                                        <p>We provide a space where parents can freely share parenting tips or write
                                            review on baby products. Or you can simply post the pictures of your little
                                            one.</p>
                                    </div>
                                </li>
                                <li className={cx(styles["third-section--content--list"], styles['shopping'])}>
                                    <div>
                                        <img src={require('./ic-shopping.svg')} alt="메인페이지의 쇼핑 소개 아이콘입니다."/>
                                        <h1>Shopping</h1>
                                        <p>Utilizing patented algorithm, we offer smart subscription commerce. We will
                                            deliver baby products such as diaper or formula to your doorstep and even
                                            adjust the size, step, and quantity automatically according to your baby’s
                                            needs.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div>
                        <div className={cx(styles['other-product-section'], 'section')}>
                            <div className={styles['other-product-section--desc']}>
                                <div>
                                    <h2>LITTLEONE IoTs</h2>
                                </div>
                                <h1>LITTLEONE IoTs</h1>
                            </div>
                            <div className={styles['other-product-section--products']}>
                                <div className={styles['pee-pee']}>
                                    <div className={styles["other-product-section--products--image"]}></div>
                                    <h5>SMART-PEEPEE<br/>(Diaper sensor)</h5>
                                    <p>Detects baby's bowel activities<br/> and provides reports</p>
                                </div>
                                <div className={styles['bottle']}>
                                    <div className={styles["other-product-section--products--image"]}></div>
                                    <h5>SMART-BOTTLE<br/>(Feeding Bottle)</h5>
                                    <p>Detects temperature, feeding angle,<br/> and provides reports.</p>
                                </div>
                                <div className={styles['temp']}>
                                    <div className={styles["other-product-section--products--image"]}></div>
                                    <h5>SMART-TEMP<br/>(Thermometer)</h5>
                                    <p>Monitor baby's temperature<br/> and provides statistics.</p>
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