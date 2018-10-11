import React from 'react';
import styles from './Section03.scss';
import classNames from 'classnames';
import anime from 'animejs';
import {getCookie} from "../../library/_LittleoneScript";

const cx = classNames.bind(styles);

class Section03 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false,
            language:getCookie('lang')
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
            width: '175px',
            easing: 'easeInSine',
            color: 'rgba(255,255,255,255)',
            paddingLeft: '15',
            paddingRight: '15',
            letterSpacing: '0px',
            textIndent: '0',
            duration: '300',
        });
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
            <section className={styles['bottle-summary--section']}>
                <div className={styles['bottle-summary--section--text']}>
                    <h1>{language.section03.first['01']}<br/>
                        {language.section03.first['02']}</h1>
                    <p>{language.section03.first['03']}<br/>
                        {language.section03.first['04']}
                    </p>
                </div>
                <div className={styles['bottle-summary--section--image']}>
                    <div className={styles['__bottle']}>
                        <a href={'javascript:void(0)'} className={cx(styles['__hover-action'],styles['__one'])} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeavHandler}>
                            {language.section03.second['01']}
                        </a>
                        <a href={'javascript:void(0)'} className={cx(styles['__hover-action'],styles['__two'])} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeavHandler}>
                            {language.section03.second['02']}
                        </a>
                        <a href={'javascript:void(0)'} className={cx(styles['__hover-action'],styles['__three'])} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeavHandler}>
                            {language.section03.second['03']}
                        </a>
                        <a href={'javascript:void(0)'} className={cx(styles['__hover-action'],styles['__four'])} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeavHandler}>
                            {language.section03.second['04']}
                        </a>
                        <a href={'javascript:void(0)'} className={cx(styles['__hover-action'],styles['__five'])} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeavHandler}>
                            {language.section03.second['05']}
                        </a>
                        <a href={'javascript:void(0)'} className={cx(styles['__hover-action'],styles['__six'])} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeavHandler}>
                            {language.section03.second['06']}
                        </a>
                    </div>
                    <div>
                        <div className={styles['bottle-spec']}>
                            <img src={getCookie('lang') ==='en'? require('./web-bottle-2-icon-1-us.svg'):require('./web-bottle-2-icon-1.svg')}
                                 alt={'keep warm,When connected to power source, Smart-Bottle will keep milk at ideal temperature so you can feed  your baby right away. '}/>
                            <h2>{language.section03.third['01']}</h2>
                            <p>{language.section03.third['02']}<br/>
                                {language.section03.third['03']}<br/>
                                {language.section03.third['04']}</p>
                        </div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_02.png')}
                                 alt={'prevent burns,If temperature is too high for feeding, Smart-Bottle will vibrate to warn you.'}/>
                            <h2>{language.section03.third['05']}</h2>
                            <p>{language.section03.third['06']}<br/>
                                {language.section03.third['07']}</p>
                        </div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_03.png')}
                                 alt={'feeding angle, lf feeding posture is ina ppropriate, Smart-Bottle will vibrate to warn you of too much air intake.'}/>
                            <h2>{language.section03.third['08']}</h2>
                            <p>{language.section03.third['09']}<br/>
                                {language.section03.third['10']}<br/>
                                {language.section03.third['11']}</p>
                        </div>
                        <div className={styles['bottle-spec']}>
                            <img src={require('./con03_04.png')}
                                 alt={'accurate temp, Prevents loss of nutrition with the help of accurate temperature sensor.'}/>
                            <h2>{language.section03.third['12']}</h2>
                            <p>{language.section03.third['13']}<br/>
                                {language.section03.third['14']}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section03