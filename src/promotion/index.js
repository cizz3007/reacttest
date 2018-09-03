import React from 'react';

import Section01 from "./section1/Section01";
import '../library/_reset.scss';
import * as styles from './index.scss';
import Section02 from "./section2/Section02";
import Section03 from "./section3/Section03";
import Section04 from "./section4/Section04";
import Section05 from "./section5/Section05";
import Section06 from "./section6/Section06";
import Section07 from "./section7/Section07";
import Section08 from "./section8/Section08";
import Footer from "./footer/Footer";
import Head from "./head/Head";

class PromotionLayout extends React.Component {


    componentDidMount() {
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
                <Head title={'LITTLEONE, next level parenting'}/>
                <Section01/>
                <Section02/>
                <Section03/>
                <div className={styles['application--background']}>
                    <Section04/>
                    <Section05/>
                    <Section06/>
                    <Section07/>
                    <Section08/>
                </div>
                <Footer/>
            </div>


        )
    }


}

export default PromotionLayout;