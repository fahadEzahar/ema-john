import React, { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useState } from 'react';
import fakeData from '../../fakeData'
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false);

   

    const handleRemove = (key) => {
        const product = cart.filter(pd => pd.key !== key);
        setCart(product);
        removeFromDatabaseCart(key);
    }

    const history = useHistory()
    const handleProceedCheckout = () => {
       history.push("/shipment");
    }

    useEffect(() => {
        const savedData = getDatabaseCart();
        const productKeys = Object.keys(savedData);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedData[key];
            return product;
        })
        setCart(cartProduct);
    }, [])

  

    let thankYou;
    if (placeOrder === true) {
        thankYou = <div class="text-center text-warning">
            <h1>Your order has been successfully processed!</h1>
            <h1>Thanks for shopping with us online!</h1>
        </div>
    }

    return (
        <div>
            <div class="row">
                <div class="col-md-9 ">
                    {
                        cart.map(cart => <ReviewItem
                            handleRemove={handleRemove}
                            cart={cart} />)
                    }
                    {
                        thankYou
                    }
                </div>
                <div class="col-md-3 ">
                    <Cart cart={cart}>
                        <button onClick = {handleProceedCheckout} class="btn btn-warning  btn-lg">Proceed CheckOut</button>
                    </Cart>
                </div>
            </div>
        </div>

    );
};

export default Review;