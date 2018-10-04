import React from 'react';
import * as styles from './Head.scss';
import classNames from 'classnames'
import {getCookie, setCookie} from "../../library/_LittleoneScript";

const cx = classNames.bind(styles);

class LadingHead extends React.Component {


    constructor(props) {
        super(props);


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

    render() {
        return (
            <header className={styles['header-section']}>
                <a href="/" className={styles['__link-logo']}>
                    <img src={require('./littleone-logo.png')} alt={'next level parenting littleone'}/>
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
