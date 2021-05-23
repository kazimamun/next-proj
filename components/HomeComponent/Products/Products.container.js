import React from 'react';
import { useSelector } from 'react-redux';
import Products from './Products';

const ProductsContainer = () => {
    const products = useSelector(state=>state.products);
    return <Products products={products} />
};

export default ProductsContainer;