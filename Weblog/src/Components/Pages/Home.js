import React, {Component} from "react";
import Header from "../Common/Header";

import headerImg from "../Assets/img/header-bg.jpg";

class Home extends Component {

    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="IT's NICE TO MEET YOU"
                    buttonText="Tell ME MORE"
                    link="/services"
                    showButton={true}
                    image={headerImg}
                />
            </div>
        )
    }
}

export default Home;