import React from 'react';
import ReactDOM from 'react-dom';
import CheckWebBrowser from "../promotion/action/CheckWebBrowser";
import '../library/_reset.scss';
import Ie10 from "../promotion/page/Ie10";
import LandpageLayout from "./LandpageLayout";

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
        <LandpageLayout/>, root
    )
}

