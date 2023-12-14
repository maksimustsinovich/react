import React from 'react';
import About from "./about/about";
import Days from "./days/days";
import Developers from "./developers/developers";
import devs from "../../data/devs";

const Info = (props) => {
    return (
        <div>
            <About />
            <Days person={props.mainPerson}/>
            <Developers info={devs}/>
        </div>
    );
};

export default Info;