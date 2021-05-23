import React from 'react';
import { useSelector } from 'react-redux';
import ShopCategory from './ShopCategory';

const ShopCategoriesContainer= () => {
    const shopCategories = useSelector(state=>state.shopCategories)
    return (
        <>
            <ShopCategory categories={shopCategories} />
        </>
    );
};

export default ShopCategoriesContainer;