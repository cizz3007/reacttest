import React from 'react';
import ReactDOM from 'react-dom';
import PromotionLayout from './promotion/promotionLayout';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import CheckWebBrowser from "./promotion/action/CheckWebBrowser";
import ErrorPage from "./promotion/page/ErrorPage";
import Ie10 from "./promotion/page/Ie10";

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
        <Router basename={'/'}>
            <Switch>
                <Route exact path="/" component={PromotionLayout}/>
                <Route path="/404error" component={ErrorPage} notFound/>
                <Redirect from="*" to="/404error"/>
            </Switch>
        </Router>, root
    );


}



