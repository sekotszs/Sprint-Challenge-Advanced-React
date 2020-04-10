import React from "react";
import "./PlayerForm.css";
import useDarkMode from "../hooks/useDarkMode";
import useLocalStorage from "../hooks/useLocalStorage";



function PlayerForm(props) {

    return (
        <div>
            <h1>{props.item.name}</h1>
            <h3>{props.item.country}</h3>
           
        </div>
    )
}

export default PlayerForm;