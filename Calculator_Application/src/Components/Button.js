import React, {Component} from "react";

class Button extends Component {
    render() {
        return (
            <div className={`column-${this.props.cols}_row-${this.props.rows}`}>
                <button className="calc-button"
                        onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>

            </div>
        )
    }
}

export default Button;