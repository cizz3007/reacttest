import React from 'react';
import ReactDOM from 'react-dom';
import CheckWebBrowser from "../promotion/action/CheckWebBrowser";
import '../library/_reset.scss';
import Ie10 from "../promotion/page/Ie10";
import LadingHead from "./head/Head";
import Head from "../promotion/head/Head";
import Section01 from "./section01/Section01";
import Section02 from "./section02/Section02";
import Section03 from "./section03/Section03";
import Section04 from "./section04/Section04";
import Section05 from "./section05/Section05";

const root = document.getElementById('app');

const browserVersion = CheckWebBrowser();

console.log(browserVersion);
const applicationVersion = {
    ie: '10',
    opera: '',
    firefox: '',
    chrome: ''
};

if (browserVersion < applicationVersion.ie) {
    ReactDOM.render(
        <Ie10/>, root
    );
} else {
    ReactDOM.render(
        <div className={'application'}>
            <Head/>
            <LadingHead/>
            <Section05/>
        </div>, root
    )
}

