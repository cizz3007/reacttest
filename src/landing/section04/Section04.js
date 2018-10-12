import React from 'react';
import styles from './Section04.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);
import anime from 'animejs';



class Section04 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeavHandler = this.onMouseLeavHandler.bind(this);

    }
    shouldComponentUpdate(nextProps) {
        return nextProps;
    }

    onMouseEnterHandler(e){
        const nodes = e.currentTarget;
        nodes.classList.toggle(styles['active']);

        anime.remove(nodes);

        let actions = anime({
            targets: nodes,
            width: '205px',
            color: 'rgba(255,255,255,255)',
            easing: 'easeInSine',
            paddingLeft: '15',
            paddingRight: '15',
            letterSpacing: '0px',
            textIndent: '0',
            duration: '300',
        })
    }

    onMouseLeavHandler(e){
        const nodes = e.currentTarget;
        nodes.classList.toggle(styles['active']);

        anime.remove(nodes);
        let actions = anime({
            targets: nodes,
            width: '56px',
            color: 'rgba(0,0,0,0)',
            easing: 'easeInSine',
            letterSpacing: '-30px',
            paddingLeft: '0',
            paddingRight: '0',
            textIndent: '-999px',
            duration: 250
        });
    }


    render() {
        let language = this.props.language;

        return (
            <section className={styles['peepee-summary--section']}>
                <div className={styles['peepee-summary--section--text']}>
                    <h1>{language.section04.first['01']}</h1>
                    <p>{language.section04.first['02']}<br/>
                        {language.section04.first['03']}</p>
                </div>
                <div className={styles['peepee-summary--section--image']}>
                    <div className={styles['__peepee']}>
                        <a href={'javascript:void(0)'} className={cx(styles['__hover-action'],styles['__one'])} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeavHandler}>
                                {language.section04.second['01']}
                        </a>
                        <a href={'javascript:void(0)'} className={cx(styles['__hover-action'],styles['__two'])} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeavHandler}>
                                {language.section04.second['02']}
                        </a>
                        <a href={'javascript:void(0)'} className={cx(styles['__hover-action'],styles['__three'])} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeavHandler}>
                                {language.section04.second['03']}
                        </a>
                    </div>
                    <div className={styles['peepee-section']}>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./web-peepee-2-icon-1.svg')}
                                 alt={'easy to use,Use the supplied patch to apply to any brand your baby likes'}/>
                            <h2>{language.section04.third['01']}</h2>
                            <p>{language.section04.third['02']}<br/>
                                {language.section04.third['03']}</p>
                        </div>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./web-peepee-2-icon-2.svg')}
                                 alt={'real-time alerts, Once bowel activity is detected, it will alert you through the app.'}/>
                            <h2>{language.section04.third['04']}</h2>
                            <p>{language.section04.third['05']}<br/>{language.section04.third['06']}</p>
                        </div>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./web-peepee-2-icon-3.svg')}
                                 alt={'reliable data, Keeps track of bowel activities to predict the next one to come.'}/>
                            <h2>{language.section04.third['07']}</h2>
                            <p>{language.section04.third['08']}<br/>
                                {language.section04.third['09']}</p>
                        </div>
                        <div className={styles['peepee-spec']}>
                            <img src={require('./web-peepee-2-icon-4.svg')}
                                 alt={'Intelligent Analysis, Accurately predicts bowel activities to reduce the risk of skin rash and infections.'}/>
                            <h2>{language.section04.third['10']}</h2>
                            <p> {language.section04.third['11']}<br/>
                                {language.section04.third['12']}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section04