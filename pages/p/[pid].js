import React from 'react';
import Products from '../../components/HomeComponent/Products/Products';
import { useSelector } from 'react-redux';
import SingleProductDetails from '../../components/SingleProductDetails/SingleProductDetails';


export async function getServerSideProps (context) {
    const { pid } = context.query;
    return {
        props : {pid}
    }
}

const ProductId = ({pid}) => {
    const products = useSelector(state=>state.products)
    const singleProduct = products.find(product =>product.id === parseInt(pid))
    console.log(singleProduct);
    return (
        <div className="shop-detail-box-main">
            <div className="container">
                <SingleProductDetails pd={singleProduct} />

                <Products products={products} />

            </div>
        </div>
    );
};

export default ProductId;