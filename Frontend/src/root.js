import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";

import './App/index.css';

// our components
import Navbar from './App/Navbar';
import Portal from './App/Portal';

const browserHistory = createBrowserHistory();

class App extends React.Component {
    componentWillMount() {
        // I don't feel like passing it down the DOM (not efficient)
        window.browserHistory = browserHistory;
    }

    render() {
        return (
            <div id="bg-wrapper">
                    <Router history={browserHistory}>
                        <Navbar />
                        <div id="bg-inner-wrapper">
                            <Switch>
                                <Route exact path="/" component={Portal} />
                                {/* <Route exact path="/login" component={Login} /> */}
                                {/* <Route exact path="/register" component={Register} /> */}
                            </Switch>
                        </div>
                    </Router>
            </div>
        );
    }
}
  
export default App;