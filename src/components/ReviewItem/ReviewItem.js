import React from 'react';


const ReviewItem = (props) => {
    const { name, quantity, price,key } = props.cart;
    const handleRemove = props.handleRemove;
    return (
        <div class ="border border-secondary rounded m-4 p-3">
                    <h3 class="text-primary">{name}</h3>
                    <h4>Quantity: {quantity}</h4>
                    <p>Price: ${price}</p>
                    <button onClick={() => handleRemove(key)} class="btn btn-warning  btn-lg">Remove</button>
        </div>
    );
};

export default ReviewItem;