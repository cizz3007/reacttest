import React from 'react';
import Head from "../promotion/head/Head";
import LadingHead from "./head/Head";
import Section01 from "./section01/Section01";
import MobileBox from "./mobileBox/MobileBox";
import Section02 from "./section02/Section02";
import Section03 from "./section03/Section03";
import Section04 from "./section04/Section04";
import Section05 from "./section05/Section05";
import Section06 from "./section06/Section06";
import Footer from "./footer/Footer";
import {getCookie, setCookie} from "../library/_LittleoneScript";
import * as styles from "./head/Head.scss";
import PlayPause from "./playpause/PlayPause";

class LandpageLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: getCookie('lang') === 'ko' ? require('./language/korean/korean') : null ||
            getCookie('lang') === 'en' ? require('./language/english/english') : null ||
            getCookie('lang') === 'cn' ? require('./language/chinese/chinese') : null ||
            getCookie('lang') === 'ja' ? require('./language/japanese/japanese') : null ||
            getCookie('lang') === 'ru' ? require('./language/russian/russian') : null ||
            getCookie('lang') === undefined || null || false ? require('./language/english/english') : require('./language/english/english')
        };
    }

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0];
        if (getCookie('lang') === 'en') {
            document.getElementsByTagName('html')[0].lang = 'en';
            body.setAttribute('class', 'lang-english');

        } else if (getCookie('lang') === 'ja') {
            document.getElementsByTagName('html')[0].lang = 'ja';
            body.setAttribute('class', 'lang-japanese');

        } else if (getCookie('lang') === 'cn') {
            document.getElementsByTagName('html')[0].lang = 'zh';
            body.setAttribute('class', 'lang-chinese');

        } else if (getCookie('lang') === 'ko') {
            document.getElementsByTagName('html')[0].lang = 'ko';
            body.setAttribute('class', 'lang-korean');

        } else if (getCookie('lang') === 'ru') {
            document.getElementsByTagName('html')[0].lang = 'ru';
            body.setAttribute('class', 'lang-russian');
        } else {
            document.getElementsByTagName('html')[0].lang = 'en';
            body.setAttribute('class', 'lang-english');
        }

    }


    setLanguage(e) {
        const langBox = document.querySelector("." + styles['language-box']);
        const body = document.getElementsByTagName('body')[0];
        langBox.classList.toggle(styles['active']);
        let dataSet = e.currentTarget.dataset['lang'];
        let target = document.getElementsByClassName('current-language')[0];
        if (dataSet === 'ko') {
            let cookieToday = new Date();
            let expiryDate = new Date(cookieToday.getTime() + (365 * 86400000)); // 1년
            setCookie('lang', 'ko', expiryDate, '/', false, false);

            this.setState(function () {
                return {
                    language: require('./language/korean/korean')
                }
            });
            target.style.background = '#fff url(' + require('./head/web-footer-icn-ko.svg') + ') no-repeat center/contain';
            document.getElementsByTagName('html')[0].lang = 'ko';
            body.setAttribute('class', 'lang-korean');


        } else if (dataSet === 'en') {
            let cookieToday = new Date();
            let expiryDate = new Date(cookieToday.getTime() + (365 * 86400000)); // 1년
            setCookie('lang', 'en', expiryDate, '/', false, false);
            this.setState(function () {
                return {
                    language: require('./language/english/english')
                }
            });
            target.style.background = '#fff url(' + require('./head/web-footer-icn-us.svg') + ') no-repeat center/contain';
            document.getElementsByTagName('html')[0].lang = 'en';
            body.setAttribute('class', 'lang-english');

        } else if (dataSet === 'cn') {
            let cookieToday = new Date();
            let expiryDate = new Date(cookieToday.getTime() + (365 * 86400000)); // 1년
            setCookie('lang', 'cn', expiryDate, '/', false, false);
            this.setState(function () {
                return {
                    language: require('./language/chinese/chinese')
                }
            });
            target.style.background = '#fff url(' + require('./head/web-footer-icn-cn.svg') + ') no-repeat center/contain';
            document.getElementsByTagName('html')[0].lang = 'zh';
            body.setAttribute('class', 'lang-chinese');


        } else if (dataSet === 'ja') {
            let cookieToday = new Date();
            let expiryDate = new Date(cookieToday.getTime() + (365 * 86400000)); // 1년
            setCookie('lang', 'ja', expiryDate, '/', false, false);
            this.setState(function () {
                return {
                    language: require('./language/japanese/japanese')
                }
            });
            target.style.background = '#fff url(' + require('./head/web-footer-icn-jp.svg') + ') no-repeat center/contain';
            document.getElementsByTagName('html')[0].lang = 'ja';
            body.setAttribute('class', 'lang-japanese');

        } else if (dataSet === 'ru') {
            let cookieToday = new Date();
            let expiryDate = new Date(cookieToday.getTime() + (365 * 86400000)); // 1년
            setCookie('lang', 'ru', expiryDate, '/', false, false);
            this.setState(function () {
                return {
                    language: require('./language/russian/russian')
                }
            });
            target.style.background = '#fff url(' + require('./head/russia.png') + ') no-repeat center/cover';
            document.getElementsByTagName('html')[0].lang = 'ru';
            body.setAttribute('class', 'lang-russian');

        }
    }

    shouldComponentUpdate(nextState) {
        return nextState;
    }

    render() {
        return (
            <div className={'application'}>
                <Head language={this.state.language}/>
                <LadingHead language={this.state.language} action={this.setLanguage.bind(this)}/>
                <PlayPause/>
                <Section01 language={this.state.language}/>
                <MobileBox language={this.state.language}/>
                <Section02 language={this.state.language}/>
                <Section03 language={this.state.language}/>
                <Section04 language={this.state.language}/>
                <Section05 language={this.state.language}/>
                <Section06 language={this.state.language}/>
                <Footer backGroundImage={'linear-gradient(to top, #00b6b9, #b1fff4'} language={this.state.language}/>
            </div>
        )
    }
}

export default LandpageLayout;