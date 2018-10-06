import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import CheckWebBrowser from "../promotion/action/CheckWebBrowser";
import '../library/_reset.scss';
import Ie10 from "../promotion/page/Ie10";

import Loadable from 'react-loadable';
import Loading from '../component/loading/Loading';


const Landingload = Loadable({
    loader: () => import('../landing/LandpageLayout'),
    loading: Loading,
});

const BottleLoad = Loadable({
    loader:()=> import('../product/bottle/index'),
    loading: Loading,

});

const PeepeeLoad = Loadable({
    loader:()=> import('../product/peepee/index'),
    loading: Loading,
});

const TempLoad = Loadable({
    loader:()=> import('../product/temp/index'),
    loading: Loading,
});

const ErrorLoad = Loadable({
    loader:()=> import('../promotion/page/ErrorPage'),
    loading: Loading,
});
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
                <Route exact path="/" component={Landingload}/>
                <Route path="/404error" component={ErrorLoad} notFound/>
                <Route exact path="/smartpeepee" component={PeepeeLoad}/>
                <Route exact path="/smartbottle" component={BottleLoad}/>
                <Route exact path="/smarttemp" component={TempLoad}/>
                <Redirect from="*" to="/404error"/>
            </Switch>
        </Router>, root
    )

}

