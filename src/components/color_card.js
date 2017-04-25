import React, { PropTypes } from 'react';

const ColorCard = ({ color, name, onClick }) => {
    const colorStyle = {
        backgroundColor: `${color}`
    };

    return(
        <div className="card">
            <div
                className="colorDisplay"
                style={colorStyle}
                onClick={onClick}
            />
            <div className="colorDescription">
                <h4 className="colorName">{name}</h4>
                <p className="colorValue">{color}</p>
            </div>
        </div>
    );
};

ColorCard.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func
};

export default ColorCard;
