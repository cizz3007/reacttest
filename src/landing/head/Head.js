import React from 'react';
import * as styles from './Head.scss';
import classNames from 'classnames'
import {getCookie, setCookie} from "../../library/_LittleoneScript";
import {Link} from 'react-router-dom';
import anime from 'animejs'

const cx = classNames.bind(styles);

class LadingHead extends React.Component {


    constructor(props) {
        super(props);

        this.onMouserHandler = this.onMouserHandler.bind(this);
        this.onMouserOutHandler = this.onMouserOutHandler.bind(this);
    };


    shouldComponentUpdate(nextState) {
        return nextState;
    }


    componentDidMount() {
        const currentLang = getCookie('lang');
        let target = document.getElementsByClassName('current-language')[0];

        if (currentLang === 'ko') {
            target.style.background = '#fff url(' + require('./web-footer-icn-ko.svg') + ') no-repeat center/contain';

        } else if (currentLang === 'en') {
            target.style.background = '#fff url(' + require('./web-footer-icn-us.svg') + ') no-repeat center/contain';

        } else if (currentLang === 'cn') {
            target.style.background = '#fff url(' + require('./web-footer-icn-cn.svg') + ') no-repeat center/contain';

        } else if (currentLang === 'ja') {
            target.style.background = '#fff url(' + require('./web-footer-icn-jp.svg') + ') no-repeat center/contain';

        }

    }

    onMouserHandler(e) {
        const target = e.currentTarget.childNodes[0];
        console.log(target);
        anime.remove(target);

        const CSStransforms = anime({
            targets: target,
            translateY: -5,
            scale: 1.25,
            rotate: '1turn',
            duration:500
        });
    }

    onMouserOutHandler(e) {
        const target = e.currentTarget.childNodes[0];
        console.log(target);
        anime.remove(target);
        const CSStransforms = anime({
            targets: target,
            translateY: 0,
            scale: 1,
            rotate: '2turn',
            duration:300
        });
    }


    render() {
        return (
            <header className={styles['header-section']}>
                <span className={styles['header-section-category']}>
                    <Link to={'/smartbottle'} className={styles['__link-smartbottle']} onMouseEnter={this.onMouserHandler} onMouseLeave={this.onMouserOutHandler}>
                        <img src={require('./web-menu-icn-bottle.svg')} width={'auto'} height={'auto'}/>
                    </Link>
                    <Link to={'/smartpeepee'} className={styles['__link-smarttemp']} onMouseEnter={this.onMouserHandler} onMouseLeave={this.onMouserOutHandler}>
                        <img src={require('./web-menu-icn-peepee.svg')} width={'auto'} height={'auto'}/>
                    </Link>
                </span>
                <a href="/" className={styles['__link-logo']}>
                    <img src={require('./littleone-logo.png')} alt={'next level parenting littleone'} width={'auto'} height={'auto'}/>
                </a>
                <ul className={styles['language-box']}>
                    <li>
                        <a href="javascript:void(0)">
                            <div className={cx(styles['__lang-en'], 'current-language')}></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={this.props.action} data-lang={'en'}>
                            <div className={styles['__lang-en']}></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={this.props.action} data-lang={'cn'}>
                            <div className={styles['__lang-cn']}></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={this.props.action} data-lang={'ja'}>
                            <div className={styles['__lang-ja']}></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={this.props.action} data-lang={'ko'}>
                            <div className={styles['__lang-ko']}></div>
                        </a>
                    </li>
                </ul>
            </header>
        );
    }
}


export default LadingHead;
