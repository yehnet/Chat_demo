import React, {Component} from "react";
import Button from "./Components/Button";
import './css/App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '0',
            previous: [],           //last input
            nextIsReset: false      //change current characters
        }
    }

    //clean memory
    clean = () => {
        this.setState({current: '0', previous: [], nextIsReset: false});
    }

    //calculate next input
    calcNext = (symbol) => {
        if (["/", "-", "*", "+"].indexOf(symbol) > -1) {
            let {previous} = this.state;
            previous.push(this.state.current + symbol);
            this.setState({previous, nextIsReset: true});
        } else {
            if ((this.state.current === "0" && symbol !== ".") || this.state.nextIsReset) {
                this.setState({current: symbol, nextIsReset: false})
            } else {
                this.setState({current: this.state.current + symbol})
            }
        }
    }

    //calculate equation
    calculate = () => {
        let {current, previous} = this.state;
        if (previous.length > 0) {
            //not a safe way
            current = eval(String(previous[previous.length - 1] + current));
            this.setState({current, previous: [], nextIsReset: true});
        }
    }

    render() {
        const buttons = [
            {symbol: 'C', cols: 1, rows: 1, action: this.clean},
            {symbol: '/', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '*', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '-', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '7', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '8', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '9', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '+', cols: 1, rows: 2, action: this.calcNext},
            {symbol: '4', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '5', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '6', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '+', cols: 1, rows: 2, action: this.calcNext},     //FIXME: rows= 2 doesnt work
            {symbol: '1', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '2', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '3', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '=', cols: 1, rows: 2, action: this.calculate},
            {symbol: '0', cols: 2, rows: 1, action: this.calcNext},
            {symbol: '.', cols: 1, rows: 1, action: this.calcNext},
            {symbol: '=', cols: 1, rows: 2, action: this.calculate},    //FIXME: rows= 2 doesnt work
        ];

        return (
            <div className="App">
                {this.state.previous.length > 0 ?
                    <div className="floater">{this.state.previous[this.state.previous - 1]}</div>   //FIXME: floater isn't showed
                    : null
                }
                <input className="result" type="text" value={this.state.current}/>

                {buttons.map((btn, i) => {
                    return <Button key={i} symbol={btn.symbol} cols={btn.cols} rows={btn.rows}
                                   action={(sym) => btn.action(sym)}/>
                })}
            </div>
        );
    }

}

export default App;