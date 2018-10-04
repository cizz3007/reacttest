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
                paddingLeft: '15',
                paddingRight: '15',
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
                                {language.section04.second.line1}
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__two']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                {language.section04.second.line2}
                            </div>
                        </a>
                        <a href={'javascript:void(0)'} className={styles['__three']}>
                            <div
                                className={cx(styles['__hover-action'])}
                                onClick={this.clickHandler}>
                                {language.section04.second.line3}
                            </div>
                        </a>
                    </div>
                    <div className={styles['peepee-section']}>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./con04_01.png')}
                                 alt={'easy to use,Use the supplied patch to apply to any brand your baby likes'}/>
                            <h2>{language.section04.third.line1}</h2>
                            <p>{language.section04.third.line2}<br/>
                                {language.section04.third.line3}</p>
                        </div>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./con04_02.png')}
                                 alt={'real-time alerts, Once bowel activity is detected, it will alert you through the app.'}/>
                            <h2>{language.section04.third.line4}</h2>
                            <p>{language.section04.third.line5}<br/>{language.section04.third.line6}</p>
                        </div>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./con04_03.png')}
                                 alt={'reliable data, Keeps track of bowel activities to predict the next one to come.'}/>
                            <h2>{language.section04.third.line7}</h2>
                            <p>{language.section04.third.line8}<br/>
                                {language.section04.third.line9}</p>
                        </div>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./con04_04.png')}
                                 alt={'Intelligent Analysis, Accurately predicts bowel activities to reduce the risk of skin rash and infections.'}/>
                            <h2>{language.section04.third.line10}</h2>
                            <p> {language.section04.third.line11}<br/>
                                {language.section04.third.line12}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section04