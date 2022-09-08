import React, {useEffect, useRef} from 'react';
import "./intro.scss"
import Man from "../../assets/images/man.png"
import Down from "../../assets/images/down.png"
import {init} from "ityped";

const Intro = () => {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed:60,
            strings: ["Frontend Developer","Project Manager"]
        })
    },[])
    return (
        <div className="into" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={Man} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Shahriddonov Murod</h1>
                    <h3>
                        Freelance <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src={Down} alt=""/>
                </a>
            </div>
        </div>
    );
};

export default Intro;