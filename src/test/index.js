import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Head from "../promotion/head/Head";

import Loadable from 'react-loadable';
import Loading from "../component/loading/Loading";

const asyncA = Loadable({
   loader:()=> import('./component/a'),
    loading:Loading
});

const asyncB = Loadable({
    loader:()=> import('./component/b'),
    loading:Loading
});

const asyncC = Loadable({
    loader:()=> import('./component/c'),
    loading:Loading
});


const root = document.getElementById('app');
ReactDOM.render(
    <Router>
            <div>
                <Head/>
                <Link to={"/a"}>a</Link>
                <Link to={"/b"}>b</Link>
                <Link to={"/c"}>c</Link>
                <Route exact path={"/"} component={asyncA}/>
                <Route exact path={"/a"} component={asyncA}/>
                <Route exact path={"/b"} component={asyncB}/>
                <Route exact path={"/c"} component={asyncC}/>
            </div>

    </Router>, root
)

