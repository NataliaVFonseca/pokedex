import React, {useState} from "react";
import logo from "../../assets/logo.svg";
import "./Presentations.css";

function Presetation(){

    return(
        <>
            <div className="Presentation">
                <img className="logo" src={logo}/>
                <h1> Seja bem-vindo à Pokedex!</h1>
            </div>   
        </>
    )
}

export default Presetation;