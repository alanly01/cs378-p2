import React from 'react';

const MenuHeader = ({ title, logo, resturant, description }) => {
    const imagePath = require(`../images/${logo}`);
    const imagePath2 = require(`../images/${resturant}`);

    return (
        <div>
            <div className='container-header'>
                <img className="img-logo" src={imagePath} alt="Logo"/>
                <img className="name-logo" src={imagePath2} alt='logo name'/>
            </div>
            <h2>{description}</h2>
            <h1>{title}</h1>
        </div>
    );
};

export default MenuHeader;
