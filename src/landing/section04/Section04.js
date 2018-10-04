import React from 'react';
import styles from './Section04.scss';
import $ from 'jquery';
import classNames from 'classnames';

const cx = classNames.bind(styles);
import anime from 'animejs';

window.jQuery = $;
window.$ = $;

class Section04 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.clickHandler = this.clickHandler.bind(this);

    }

    componentDidMount() {

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
                width: '205px',
                easing: 'easeInSine',
                borderRadius: '32px',
                color: 'rgba(255,255,255,255)',
                duration: '300',
                paddingLeft:'15',
                paddingRight:'15',
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
                paddingLeft:'0',
                paddingRight:'0',
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
        return (
            <section className={styles['peepee-summary--section']}>
                <div className={styles['peepee-summary--section--text']}>
                    <h1>Intelligent feeding bottle<br/>
                        that helps comfortable feeding</h1>
                    <p>Smart-Bottle monitors temperature and feeding posture<br/>
                        to help you feed your baby more safely and conveniently.</p>
                </div>
                <div className={styles['peepee-summary--section--image']}>
                    <div className={styles['__peepee']}>
                        <a href={'javascript:void(0)'} className={styles['__one']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                Sensing unit(Temp. Humid)
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__two']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                Waterproof Body(IP67)
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__three']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                Removable battery
                            </div>
                        </a>
                    </div>
                    <div className={styles['peepee-section']}>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./con04_01.png')}
                                 alt={'easy to use,Use the supplied patch to apply to any brand your baby likes'}/>
                            <h2>Easy to Use</h2>
                            <p>Use the supplied patch to apply<br/>
                                to any brand your baby likes</p>
                        </div>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./con04_02.png')}
                                 alt={'real-time alerts, Once bowel activity is detected, it will alert you through the app.'}/>
                            <h2>Real-time Alerts</h2>
                            <p>Once bowel activity is detected,<br/>
                                it will alert you through the app.</p>
                        </div>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./con04_03.png')}
                                 alt={'reliable data, Keeps track of bowel activities to predict the next one to come.'}/>
                            <h2>Reliable Data</h2>
                            <p>Keeps track of bowel activities<br/>
                                to predict the next one to come.</p>
                        </div>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./con04_04.png')}
                                 alt={'Intelligent Analysis, Accurately predicts bowel activities to reduce the risk of skin rash and infections.'}/>
                            <h2>Intelligent Analysis</h2>
                            <p>Accurately predicts bowel activities<br/>
                                to reduce the risk of skin rash and infections.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section04