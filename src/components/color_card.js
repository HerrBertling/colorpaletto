import React from 'react';

const ColorCard = (props) => {
    const colorStyle = {
        backgroundColor: `${props.color}`
    };

    return(
        <div className="card">
            <div
                className="colorDisplay"
                style={colorStyle}
                onClick={props.onClick}
            />
            <div className="colorDescription">
                <h4 className="colorName">{props.name}</h4>
                <p className="colorValue">{props.color}</p>
            </div>
        </div>
    );
};

export default ColorCard;
