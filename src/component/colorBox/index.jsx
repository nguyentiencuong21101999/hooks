import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};
const getRandomColor = () =>{
    const COLOR_LIST =["red","yellow","green","black","white"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];

}

function ColorBox() {
    const [color , setColor] = useState("deeppink");

    const changeColor = () =>{
        const newColor = getRandomColor();
        setColor(newColor);
    }
    return (
        <div 
        style={{backgroundColor:color}}
        onClick ={() =>{changeColor()}}>
            Color box 
        </div>
    );
}

export default ColorBox;