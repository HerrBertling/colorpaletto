import React from 'react';

const BusinessCard = (props) => {
    const backgroundStyle = {background: props.backgroundColor};

    return(
        <div className="businesscard">
            <svg
                width="1102"
                height="642"
                viewBox="0 0 1102 642"
                style={backgroundStyle}
            >
                <title>Business Card</title>
                <g>
                    <rect x="20" y="20" width="20" height="195" fill={props.mainColor} />
                    <rect x="20" y="225" width="20" height="195" fill={props.accentColor} />
                    <rect x="20" y="430" width="20" height="195" fill={props.lightFontColor} />
                </g>
            </svg>
        </div>
    );
};

export default BusinessCard;
