import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, seller, price, stock,key, } = props.product;
    const handleAddProduct = props.handleAddProduct;
    return (
        <div>
            <div class="row m-4 border border-secondary rounded p-3">
                <div class="col-md-4">
                    <img src={img} alt="" />
                </div>
                <div class="col-md-8">
                    <h5 class="text-primary"><Link to={"/product/"+key}> {name} </Link></h5>
                    <br/>
                    <h5> By: {seller}</h5>
                    <br/>
                    <h4>Price $ {price}</h4>
                    <br/>
                    <h6>Stock Available: {stock}</h6>
                    <br/>
                    { props.showAddButton===true && <button onClick={() => handleAddProduct(props.product)} class="btn btn-warning  btn-lg">Add to Cart</button>}
                </div>
            </div>


        </div>
    );
};

export default Product;