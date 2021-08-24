import PageWrapper from "./Components/PageWrapper";
import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <PageWrapper>

                        <Route
                            exact={true}
                            path="/"
                            component={Home}
                        />

                        <Route
                            path="/about"
                            component={About}
                        />


                    </PageWrapper>
                </Router>
            </div>
        );
    }
}

export default App;
