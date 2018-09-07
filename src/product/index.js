import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import BottleLayout from "./bottle";
import ErrorPage from "../promotion/page/ErrorPage";
import PeepeeLayout from "./peepee";
import PromotionLayout from "../promotion";
import TempLayout from "./temp";



const root = document.getElementById('app');
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={PromotionLayout}/>
            <Route exact path="/smartpeepee" component={PeepeeLayout}/>
            <Route exact path="/smartbottle" component={BottleLayout}/>
            <Route exact path="/smarttemp" component={TempLayout}/>
            <Route path="/404error" component={ErrorPage} notFound/>
            <Redirect from="*" to="/404error"/>
        </Switch>
    </HashRouter>, root
);