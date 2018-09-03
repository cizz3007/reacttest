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
import OtherProduct from "../other/OtherProduct";

class BottleLayout extends React.Component {

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

render() {
    return (
        <div className={styles['smart-bottle-article']} id={'product-section'}>
            <Head/>
            <Section01/>
            <Section02/>
            <Section03/>
            <Section04/>
            <Section05/>
            <Section06/>
            <Section07/>
            <Section08/>
            <OtherProduct/>
        </div>
    )
}
}

export default BottleLayout;