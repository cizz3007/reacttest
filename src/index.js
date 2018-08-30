import React from 'react';
import ReactDOM from 'react-dom';
import PromotionLayout from './promotion/index';
import {BrowserRouter as Router,HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import CheckWebBrowser from "./promotion/action/CheckWebBrowser";
import ErrorPage from "./promotion/page/ErrorPage";

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
        <div>
            We don't support ie under 10 version.
            please, get latest Google Chrome.
            <a href={'https://www.google.com/chrome/'}/>
        </div>, root
    );
} else {
    ReactDOM.render(
        <Router basename={'/'}>
            <Switch>
                <Route exact path="/" component={PromotionLayout}/>
                <Route path="/404error" component={ErrorPage} notFound/>
                <Redirect from="*" to="/404error"/>
            </Switch>
        </Router>, root
    );

}



