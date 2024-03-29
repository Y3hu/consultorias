import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home/MainTabs'
import * as serviceWorker from './serviceWorker';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={Home}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
