import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, HashRouter, Route, Redirect, Link, Switch} from 'react-router-dom';
import BottleLayout from "./bottle";
import ErrorPage from "../promotion/page/ErrorPage";


const root = document.getElementById('app');
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={BottleLayout}/>
            <Route path="/404error" component={ErrorPage} notFound/>
            <Redirect from="*" to="/404error"/>
        </Switch>
    </Router>, root
);