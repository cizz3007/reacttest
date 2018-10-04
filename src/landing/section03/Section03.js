import React from 'react';
import styles from './Section03.scss';
import $ from 'jquery';
import classNames from 'classnames';

const cx = classNames.bind(styles);
import anime from 'animejs';

window.jQuery = $;
window.$ = $;

class Section03 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.clickHandler = this.clickHandler.bind(this);

    }

    shouldComponentUpdate(nextProps) {
        return nextProps;
    }

    clickHandler(e) {
        const nodes = e.currentTarget;
        nodes.classList.toggle('active');
        let isActive = nodes.classList.contains('active');


        if (isActive) {


            let timeLine1 = anime.timeline();

            timeLine1.add({
                begin: function () {
                    if (nodes.dataset['isAnimated'] === 'true') {
                        return;
                    }
                    nodes.dataset.isAnimated = 'true';


                },
                run: function () {

                    nodes.dataset.isAnimated = 'true';

                },
                complete: function () {
                    nodes.dataset.isAnimated = 'false';
                },
                targets: nodes,
                width: '205px',
                translate: '300',
                easing: 'easeInSine',
                borderRadius: '32px',
                color: 'rgba(255,255,255,255)',
                paddingLeft: '15',
                paddingRight: '15',
                duration: '300',
            }).add({
                targets: nodes,
                letterSpacing: '0px',
                duration: '200',
            })


        }
        if (!isActive) {
            let timeLine1 = anime.timeline();

            timeLine1.add({
                begin: function () {
                    if (nodes.dataset['isAnimated'] === 'true') {
                        return;
                    }
                    nodes.dataset.isAnimated = 'true';

                },
                run: function () {

                    nodes.dataset.isAnimated = 'true';

                },
                complete: function () {
                    nodes.dataset.isAnimated = 'false';

                },
                targets: nodes,
                width: '56px',
                color: 'rgba(0,0,0,0)',
                translate: '0',
                easing: 'easeInSine',
                borderRadius: '999px',
                letterSpacing: '-30px',
                paddingLeft: '0',
                paddingRight: '0',
                delay: 50,
                duration: 150,


            })


        }

        this.setState(() => {
            return {
                active: !this.state.active
            }
        });
    }


    render() {
        let language = this.props.language;
        return (
            <section className={styles['bottle-summary--section']}>
                <div className={styles['bottle-summary--section--text']}>
                    <h1>{language.section03.first.line1}<br/>
                        {language.section03.first.line2}</h1>
                    <p>{language.section03.first.line3}<br/>
                        {language.section03.first.line4}
                    </p>
                </div>
                <div className={styles['bottle-summary--section--image']}>
                    <div className={styles['__bottle']}>
                        <a href={'javascript:void(0)'} className={styles['__one']}>
                            <div className={cx(styles['__hover-action'])} onClick={this.clickHandler}>
                                {language.section03.second.line1}
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__two']}>
                            <div className={cx(styles['__hover-action'])} onClick={this.clickHandler}>
                                {language.section03.second.line2}
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__three']}>
                            <div className={cx(styles['__hover-action'])} onClick={this.clickHandler}>
                                {language.section03.second.line3}
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__four']}>
                            <div className={cx(styles['__hover-action'])} onClick={this.clickHandler}>
                                {language.section03.second.line4}
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__five']}>
                            <div className={cx(styles['__hover-action'])} onClick={this.clickHandler}>
                                {language.section03.second.line5}
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__six']}>
                            <div className={cx(styles['__hover-action'])} onClick={this.clickHandler}>
                                {language.section03.second.line6}
                            </div>
                        </a>
                    </div>
                    <div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_01.png')} alt={'keep warm,When connected to power source, Smart-Bottle will keep milk at ideal temperature so you can feed  your baby right away. '}/>
                            <h2>{language.section03.third.line1}</h2>
                            <p>{language.section03.third.line2}<br/>
                                {language.section03.third.line3}<br/>
                                {language.section03.third.line4}</p>
                        </div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_02.png')} alt={'prevent burns,If temperature is too high for feeding, Smart-Bottle will vibrate to warn you.'}/>
                            <h2>{language.section03.third.line5}</h2>
                            <p>{language.section03.third.line6}<br/>
                                {language.section03.third.line7}</p>
                        </div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_03.png')} alt={'feeding angle, lf feeding posture is ina ppropriate, Smart-Bottle will vibrate to warn you of too much air intake.'}/>
                            <h2>{language.section03.third.line8}</h2>
                            <p>{language.section03.third.line9}<br/>
                                {language.section03.third.line10}<br/>
                                {language.section03.third.line11}</p>
                        </div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_04.png')} alt={'accurate temp, Prevents loss of nutrition with the help of accurate temperature sensor.'}/>
                            <h2>{language.section03.third.line12}</h2>
                            <p>{language.section03.third.line13}<br/>
                                {language.section03.third.line14}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section03