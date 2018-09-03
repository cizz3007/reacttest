import React from 'react';
import styles from './Index.scss';
import Section01 from "./section01/Section01";
import Section02 from "./section02/Section02";
import Section03 from "./section03/Section03";
import Section07 from "./section07/Section07";
import Section08 from "./section08/Section08";
import Section04 from "./section04/Section04";
import Section05 from "./section05/Section05";
import fullpage from "fullpage.js";
import Section06 from "./section06/Section06";
import Head from "../../promotion/head/Head";
import OtherProduct from "../other/OtherProduct";

class PeepeeLayout extends React.Component {

    render() {
        return (
            <div className={styles['smart-peepee-article']} id={'smart-peepee-section'}>
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

export default PeepeeLayout;
