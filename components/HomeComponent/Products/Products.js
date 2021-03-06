import React from 'react';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../actions/cart';

const SingleProduct = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div className={`col-lg-3 col-md-6 special-grid ${product.tags.join(" ")}`}>
            <div className="products-single fix">
                <div className="box-img-hover">
                    <div className="type-lb">
                        <p className={product.img === "img-pro-02" ? "new" : "sale"}>{product.status}</p>
                    </div>
                    <img src={`/assets/images/${product.img}.jpg`} className="img-fluid" alt="Image" />
                    <div className="mask-icon">
                        <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                        </ul>
                        <a className="cart" style={{cursor: 'pointer'}} onClick={() => dispatch(addToCart(product))}>Add to Cart</a>
                    </div>
                </div>
                <Link href="/p/[pid]" as={`/p/${product.id}`}>
                    <a>
                        <div className="why-text">
                            <h4>{product.description}</h4>
                            <h5> ${product.price.sellingPrice}</h5>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
};

const Products = ({ products }) => {
    return (
        <div className="products-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-all text-center">
                            <h1>Featured Products</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="special-menu text-center">
                            <div className="button-group filter-button-group">
                                <button className="active" data-filter="*">All</button>
                                <button data-filter=".top-featured">Top featured</button>
                                <button data-filter=".best-seller">Best seller</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row special-list">
                    {
                        products.map(product => <SingleProduct key={product.id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;