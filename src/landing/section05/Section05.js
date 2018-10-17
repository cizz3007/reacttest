import React from 'react';
import styles from './Section05.scss';
import classNames from 'classnames';
import $ from 'jquery';

const cx = classNames.bind(styles);
window.jQuery = $;
window.$ = $;
require('../../library/bxslider.min');

class Section05 extends React.Component {

    componentDidMount(){
        const slider = '.' + styles['slider'];
        let bxSlider = $(slider).bxSlider({
            touchEnabled: false,
            responsive: true,
            pager: true,
            infiniteLoop: true,
        });
        let windowSize = $(window).width();

        $(window).on('resize', function (e) {
            windowSize = $(window).width();
            bxSlider.reloadSlider();

            if (windowSize <= 1024) {
                bxSlider.destroySlider();
            }

        });

        if (windowSize <= 1024) {
            bxSlider.destroySlider();
            setTimeout(function(){
                bxSlider.destroySlider();
            },150);
            setTimeout(function(){
                bxSlider.destroySlider();
            },300);
            setTimeout(function(){
                bxSlider.destroySlider();
            },450);
        }
    }

    render() {
        let language = this.props.language;
        return (
            <section className={styles['lower-slider-section']}>
                <div className={styles['slider']}>
                    <div>
                        <div className={styles['lower-slider-section--title']}>
                            <h2>{language.section05.first['01']}</h2>
                        </div>
                        <div className={styles['lower-slider-section--desc']}>
                            <h1>{language.section05.first['02']}<br/>
                                {language.section05.first['03']}
                            </h1>
                            <p> {language.section05.first['04']}<br/>
                                {language.section05.first['05']}</p>
                        </div>
                        <img src={require('./web-peepee-5-laptop@2x.png')} className={styles['__slider-1--image']}  width={"auto"} height={"auto"}/>
                    </div>
                    <div>
                        <section className={styles["third-section"]}>
                            <div className={styles['third-section--desc']}>
                                <div>
                                    <h2> {language.section05.second['01']}</h2>
                                </div>
                                <h1>{language.section05.second['02']}</h1>
                            </div>
                            <ul className={styles['third-section--content']}>
                                <li className={cx(styles['third-section--content--list'], styles['health-care'])}>
                                    <div>
                                        <img src={require('./ic-healthcare.svg')} alt="메인페이지의 헬스케어 소개 아이콘입니다." width={"auto"} height={"auto"}/>
                                        <h1>{language.section05.second['03']}</h1>
                                        <p>{language.section05.second['04']}</p>
                                    </div>
                                </li>
                                <li className={cx(styles["third-section--content--list"], styles['community'])}>
                                    <div>
                                        <img src={require('./ic-community.svg')} alt="메인페이지의 커뮤니티 소개 아이콘입니다."  width={"auto"} height={"auto"}/>
                                        <h1>{language.section05.second['05']}</h1>
                                        <p>{language.section05.second['06']}</p>
                                    </div>
                                </li>
                                <li className={cx(styles["third-section--content--list"], styles['shopping'])}>
                                    <div>
                                        <img src={require('./ic-shopping.svg')} alt="메인페이지의 쇼핑 소개 아이콘입니다." width={"auto"} height={"auto"}/>
                                        <h1>{language.section05.second['07']}</h1>
                                        <p>{language.section05.second['08']}</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div>
                        <div className={cx(styles['other-product-section'], 'section')}>
                            <div className={styles['other-product-section--desc']}>
                                <div>
                                    <h2>{language.section05.third['01']}</h2>
                                </div>
                                <h1>{language.section05.third['01']}</h1>
                            </div>
                            <div className={styles['other-product-section--products']}>
                                <div className={styles['pee-pee']}>
                                    <div className={styles["other-product-section--products--image"]}></div>
                                    <h5>{language.section05.third['02']}<br/>{language.section05.third['03']}</h5>
                                    <p>{language.section05.third['04']}<br/> {language.section05.third['05']}</p>
                                </div>
                                <div className={styles['bottle']}>
                                    <div className={styles["other-product-section--products--image"]}></div>
                                    <h5>{language.section05.third['06']}<br/>{language.section05.third['07']}</h5>
                                    <p>{language.section05.third['08']}<br/> {language.section05.third['09']}</p>
                                </div>
                                <div className={styles['temp']}>
                                    <div className={styles["other-product-section--products--image"]}></div>
                                    <h5>{language.section05.third['10']}<br/>{language.section05.third['11']}</h5>
                                    <p>{language.section05.third['12']}<br/> {language.section05.third['13']}</p>
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