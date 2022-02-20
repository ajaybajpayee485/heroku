import React from "react";
import web from "../src/images/image.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = ()=>{
    return (
        <>
        <Common name="welcome to about page" imgsrc={web} 
        visit="/contact" btname="contact now"/>
        </>
    );
};

export default About;