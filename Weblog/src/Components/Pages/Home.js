import React, {Component} from "react";
import Header from "../Common/Header";
import headerImg from "../Assets/img/header-bg.jpg";

//re-usable components
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Timeline from "../Common/Timeline";
import Team from "../Common/Team";

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

                <Services/>
                <Portfolio/>
                <Timeline/>
                <Team/>
            </div>
        )
    }
}

export default Home;