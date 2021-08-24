import React, {Component} from "react";
import TeamMember from "./TeamMember";

import member1 from '../Assets/img/Team/1.jpg';
import member2 from '../Assets/img/Team/2.jpg';
import member3 from '../Assets/img/Team/3.jpg';

const members = [
    {name: 'Kay Garland', role: 'Lead Designer', image: member1},
    {name: 'Larry Parker', role: 'Lead Marketer', image: member2},
    {name: 'Diana Pertersen', role: 'Lead Developer', image: member3}
]


class Team extends Component {
    render() {
        return (
            <section className="bg-light" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {members.map((member, index) => {
                            return <TeamMember {...member} key={index}/>
                        })}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aut eaque,
                                laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut
                                unde.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;