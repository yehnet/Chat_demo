import PageWrapper from "./Components/PageWrapper";
import React, {Component} from "react";
import Home from "./Components/Pages/Home";

class App extends Component {
    render() {
        return (
            <div>

                <PageWrapper>
                    <Home/>
                </PageWrapper>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

export default App;
