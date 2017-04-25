import React, { PropTypes } from 'react';

const Palette = ({ children }) => {
    return(
        <div className="palette">
            {children}
        </div>
    );
};

Palette.propTypes = {
    children: PropTypes.node
};

export default Palette;
