import React from 'react'
import "../App.css"

const Menu = ( {setLineColor, setLineWidth, setLineOpacity}) =>{
    return(
        <div className="Menu">
            <label>Brush color</label>
            <input
                type= "color"
                onChange={(e) => {
                    setLineColor(e.target.value);
                }}
            />
            <label>Brush width</label>
            <input
                type= 'range'
                min="3"
                max="20"
                onChange={(e)=>{
                    setLineOpacity(e.target.value / 100);
                }}
                />

        </div>
    )
}

export default Menu