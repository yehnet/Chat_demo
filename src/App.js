import React, {Component} from "react";
import HighScore from "./HighScore";
import './css/App.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClicks = () => {
        this.setState({count: this.state.count + 1})
        // console.log("Clicked");
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("Update from", prevState, "to", this.state)
        if (this.state.count > 10 && !this.state.overTen) {
            console.log("Updating overTen.");
            this.setState({overTen: true});
        }
    }

    resetCount = (e) => {
        console.log("Event is", e);
        this.setState({
            count: 0,
            overTen: false
        });
    }

    render() {
        let {count} = this.state;

        return (
            <div>
                <h1>You clicked the button {count} times!</h1>
                <HighScore
                    overTen={this.state.overTen}
                    onReset={this.resetCount}
                />
                <span>
                        <button onClick={() => this.handleClicks()}>Click Me</button>
                        </span>
            </div>
        );
    }
}

export default App;