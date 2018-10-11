import React from 'react';
import * as styles from './Index.scss';
import '../../library/_reset.scss';
import fullpage from 'fullpage.js';
import Section01 from "./section01/Section01";
import Section02 from "./section02/Section02";
import Section03 from "./section03/Section03";
import Head from "../../promotion/head/Head";
import Section04 from "./section04/Section04";
import Section05 from "./section05/Section05";
import Section06 from "./section06/Section06";
import Section07 from "./section07/Section07";
import Section08 from "./section08/Section08";
import Section09 from "./section09/Section09";
import {getCookie} from "../../library/_LittleoneScript";


class BottleLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: getCookie('lang') === 'ko' ? require('../../landing/language/korean/product/smartbottle') : null ||
            getCookie('lang') === 'en' ? require('../../landing/language/english/product/smartbottle') : null ||
            getCookie('lang') === 'cn' ? require('../../landing/language/chinese/product/smartbottle') : null ||
            getCookie('lang') === 'ja' ? require('../../landing/language/japanese/product/smartbottle') : null ||
            getCookie('lang') === undefined || null || false ? require('../../landing/language/english/product/smartbottle') : require('../../landing/language/english/product/smartbottle')
        };

    }

    shouldComponentUpdate(nextState) {
        return nextState;
    }

    componentDidMount() {
        new fullpage('#product-section', {
            //options here
            licenseKey: 'C1CC5B53-80DD44AD-B875A4EB-2F0182E3',
            autoScrolling: true,
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: false,
            lazyLoading: true,
            scrollingSpeed: 580,
            onLeave: function (origin, destination, direction) {
            },
            afterLoad: function (origin, destination, direction) {
            },
            afterRender: function () {
            },
            afterResize: function (width, height) {
            },
            afterResponsive: function (isResponsive) {
            },
            afterSlideLoad: function (section, origin, destination, direction) {
            },
            onSlideLeave: function (section, origin, destination, direction) {
            }
        })
    }

    componentWillUnmount() {
        fullpage_api.destroy();
    }

    render() {
        console.log(this.state.language);

        return (
            <div className={styles['smart-bottle-article']} id={'product-section'}>
                <Head title={"LITTLEONE, SMART BOTTLE"}/>
                <Section01 language={this.state.language}/>
                <Section02 language={this.state.language}/>
                <Section03 language={this.state.language}/>
                <Section04 language={this.state.language}/>
                <Section05 language={this.state.language}/>
                <Section06 language={this.state.language}/>
                <Section07 language={this.state.language}/>
                <Section08 language={this.state.language}/>
                <Section09 language={this.state.language}/>
            </div>
        )

    }
}

export default BottleLayout;