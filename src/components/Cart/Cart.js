import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;


    // Calculation 
    const total = cart.reduce((sum, current) => sum + current.price * current.quantity, 0).toFixed(2);
    let shipping = 0;
    if (total > 15) {
        shipping = 0;
    }
    else if (total > 0) {
        shipping = 10;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (Number(total) + shipping + Number(tax)).toFixed(2);
    // calculation end


    return (
        <div >
            <ul class="list-group list-group-flush position-fixed  m-4 p-1">
                <li class="list-group-item lead">Product Added : {cart.length} </li>
                <li class="list-group-item">Total Price : $ {total} </li>
                <li class="list-group-item">Shipping Charge: $ {shipping}</li>
                <li class="list-group-item">Tax + Vat : $ {tax}</li>
                <li class="list-group-item">Grand Total : $ {grandTotal}</li>
                <br/>
                    {
                        props.children
                    }
               
            </ul>



            

        </div>
    );
};

export default Cart;