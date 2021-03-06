import React from 'react';
import '../library/_reset.scss';
import styles from './index.scss'
import Head from "./head/Head";
import Section01 from "./section1/Section01";
import Section02 from "./section2/Section02";
import Section03 from "./section3/Section03";
import Section04 from "./section4/Section04";
import Section05 from "./section5/Section05";
import Section06 from "./section6/Section06";
import Section07 from "./section7/Section07";
import Section08 from "./section8/Section08";
import Footer from "./footer/Footer";
import {getCookie, setCookie} from "../library/_LittleoneScript";

class PromotionLayout extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            lang: getCookie('lang'),
            language: require('../language/english')
        }
    }


    componentDidUpdate() {

        let cookieToday = new Date();
        let expiryDate = new Date(cookieToday.getTime() + (365 * 86400000)); // 1년
        setCookie('lang', 'ko', expiryDate, '/', false, false);

        if (this.state.lang === 'en') {
            this.state.language = require('../language/english');
        } else if (this.state.lang === 'ko') {
            this.state.language = require('../language/korean');
        }

        console.log(this.state.lang);
        console.log(this.state.language);


        const color = {
            brown: "color:#560000;font-size:11px;",
            red: "color:#d83128;font-size:11px;",
            yellow: "color:#ea991b;font-size:11px;",
            green: "color:#93ba2f;font-size:11px;",
            blue: "color:#4da4e0;font-size:11px;",
            magenta: "color:#ff5274;font-size:11px",
            black: "color:#333333;font-size:11px",
            tangerineTango: 'color:#EF5442',
            violetPurple: 'color:#604C8D; font-size:11px'
        };

        console.log(
            "%c*************************************************************\n" +
            "%c                 __    __________________    ______          \n" +
            "%c                / /   /  _/_  __/_  __/ /   / ____/          \n" +
            "%c               / /    / /  / /   / / / /   / __/             \n" +
            "%c              / /____/ /  / /   / / / /___/ /___             \n" +
            "%c             /_____/___/ /_/   /_/ /_____/_____/             \n" +
            "%c                       ____   _   __._____                   \n" +
            "%c                     / __  / / | / / ____/                   \n" +
            "%c                    / / / / /  |/ / __/                      \n" +
            "%c                   / /_/ / / /|  / /___                      \n" +
            "%c                  ._____. /_/ |_/_____/                      \n\n" +
            "%c*************************************************************\n" +
            "%c 프론트 개발자 : %c김창현                                    \n" +
            "%c 백엔드 개발자 : %c장지수                                    \n" +
            "%c-------------현재 인하우스 개발 중입니다.ver Beta------------\n",
            color.green, color.red, color.magenta, color.magenta, color.magenta,
            color.magenta, color.magenta, color.magenta, color.magenta, color.magenta,
            color.magenta, color.green, color.tangerineTango, color.blue, color.tangerineTango,
            color.violetPurple, color.yellow
        );

        console.log("%c It's promotion-site !", color.green);

    }

    render() {
        return (
            <div className={styles['application']}>
                <Head/>
                <Section01 language={this.state.language}/>
                <Section02/>
                <Section03/>
                <div className={styles['application--background']}>
                    <Section04/>
                    <Section05/>
                    <Section06/>
                    <Section07/>
                    <Section08/>
                    <Footer/>
                </div>
            </div>
        )
    }


}

export default PromotionLayout;