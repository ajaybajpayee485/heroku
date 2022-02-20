import React from "react";
import web from "../src/images/rocket7.jpg";

import Common from "./Common";


const Home = ()=>{
    return (
        <>
        <Common  name="Grow your business with" imgsrc={web} 
        visit="/service" btname="get started"/>
        </>
    );
};

export default Home ;