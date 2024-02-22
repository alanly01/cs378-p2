import React from 'react';

const MenuItem = ({ title, description, imageName, price, count, incrementCount, decrementCount }) => {
    const imagePath = require(`../images/${imageName}`);
    return (
        <div className="container">
            <div>
                <img src={imagePath} alt={`${imageName} food`} />
            </div>
            <FoodDescription
                title={title}
                description={description}
                price={price}
                count={count}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
            />
        </div>
    );
};

const FoodDescription = ({ title, description, price, count, incrementCount, decrementCount }) => {
    return (
        <div className="description">
            <b>{title}</b>
            <p id="describe">{description}</p>
            <FoodPrice
                price={price}
                count={count}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
            />
        </div>
    );
};

const FoodPrice = ({ price, count, incrementCount, decrementCount }) => {
    return (
        <div className='price'>
            <p>${price}</p>
            <div className="price-controls">
                <button onClick={() => decrementCount()} >-</button>
                <p>{count}</p>
                <button onClick={() => incrementCount()}>+</button>
            </div>
        </div>
    );
};


export default MenuItem;
