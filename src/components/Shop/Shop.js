import React, { useEffect } from 'react';
import fakeData from '../../fakeData/index'
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
    // const fakeData = fakeData;
    const firstTen = fakeData.slice(0, 10)
    const [product, setProduct] = useState(firstTen);
    // console.log(firstTen)
    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        const savedData = getDatabaseCart();
        const productKeys = Object.keys(savedData);
        const PreviousCartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedData[key];
            return product;
        })
        setCart(PreviousCartProduct);
    }, [])




    const handleAddProduct = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others,sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    return (
        <div>
            <div class="row">
                <div class="col-md-9">

                    {
                        product.map(product => <Product
                            handleAddProduct={handleAddProduct}
                            showAddButton={true}
                            product={product} />)
                    }
                </div>
                <div class="col-md-3 ">
                    <Cart cart={cart} >
                    <Link to="/review">
                     <button class="btn btn-warning  btn-lg"> Order Review </button>
                     
                     </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;