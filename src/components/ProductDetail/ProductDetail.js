import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import fakeData from '../../fakeData'

const ProductDetail = () => {
    const {productKey} = useParams();
    const sameProduct = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <h1> {productKey} product detail here</h1>
            <Product showAddButton={false} product={sameProduct} />
        </div>
    );
};

export default ProductDetail;