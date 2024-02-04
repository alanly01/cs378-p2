import React from 'react';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    const imagePath = require(`../images/${imageName}`);

    return (
        <div className="container">
            <div>
                <img src={imagePath} alt='{imageName} food'/>
            </div>

            <FoodDescription
            title={title}
            description={description}
            price={price}
            />

        </div>
    );
};

const FoodDescription = ({ title, description, price }) => {

    return (
    <div className="description">
        <b>{title}</b>
        <p id="describe">{description}</p>  
        <FoodPrice
            price={price}/>          
    </div>
    );
};

const FoodPrice = ({price}) => {

    return (
    <div className='price'>
        <p>${price}</p>
        <button>Add</button>
    </div>          
    );
};

export default MenuItem;
