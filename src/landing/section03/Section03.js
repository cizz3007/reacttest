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
            active: false
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.clickReturn = this.clickReturn.bind(this);

    }

    componentDidMount() {

    }

    clickReturn(e) {
        alert("!!");
        const nodes = e.currentTarget;
        nodes.addEventListener('click', function () {
            alert("!!!!!");
        });

    }

    clickHandler(e) {
        const nodes = e.currentTarget;
        nodes.classList.toggle('active');
        let isActive = nodes.classList.contains('active');
        const isRunning = nodes.dataset['isAnimated'];


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
                width: '190px',
                translate: '300',
                easing: 'easeInSine',
                borderRadius: '32px',
                color: 'rgba(255,255,255,255)',
                duration: '200',
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
                delay: 50,
                duration: 200,


            })


        }

        this.setState(() => {
            return {
                active: !this.state.active
            }
        });
    }


    render() {
        return (
            <section className={styles['bottle-summary--section']}>
                <div className={styles['bottle-summary--section--text']}>
                    <h1>Intelligent feeding bottle<br/>
                        that helps comfortable feeding</h1>
                    <p>Smart-Bottle monitors temperature and feeding posture<br/>
                        to help you feed your baby more safely and conveniently.
                    </p>
                </div>
                <div className={styles['bottle-summary--section--image']}>
                    <div className={styles['__bottle']}>
                        <a href={'javascript:void(0)'} className={styles['__one']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                Bottle cap (pp)
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__two']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                Nipple (Sillicone)
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__three']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                Ring and Handle (PP)
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__four']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                Straw (Sillicone)
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__five']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                Bottle body (Glass)
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__six']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                Smart base
                            </div>
                        </a>
                    </div>
                    <div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_01.png')}
                                 alt={'keep warm,When connected to power source, Smart-Bottle will keep milk at ideal temperature so you can feed  your baby right away. '}/>
                            <h2>Keep Warm</h2>
                            <p>When connected to power source, Smart-Bottle will<br/>
                                keep milk at ideal temperature so you can feed<br/>
                                your baby right away.</p>
                        </div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_02.png')}
                                 alt={'prevent burns,If temperature is too high for feeding, Smart-Bottle will vibrate to warn you.'}/>
                            <h2>Prevent Burns</h2>
                            <p>If temperature is too high for feeding,<br/>
                                Smart-Bottle will vibrate to warn you.</p>
                        </div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_03.png')}
                                 alt={'feeding angle, lf feeding posture is ina ppropriate, Smart-Bottle will vibrate to warn you of too much air intake.'}/>
                            <h2>Feeding Angle</h2>
                            <p>lf feeding posture is ina ppropriate,<br/>
                                Smart-Bottle will vibrate<br/>
                                to warn you of too much air intake.</p>
                        </div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_04.png')}
                                 alt={'accurate temp, Prevents loss of nutrition with the help of accurate temperature sensor.'}/>
                            <h2>Accurate Temp. Measurement</h2>
                            <p>Prevents loss of nutrition<br/>
                                with the help of accurate temperature sensor.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section03