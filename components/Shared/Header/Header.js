import React from 'react';
import Link from 'next/link'
import TopBar from '../TopBar/TopBar';
import TopSearch from '../TopSearch/TopSearch';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItemsCount = useSelector(state=>state.cart.length);
    return (
        <>
            <TopBar />
            <header className="main-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation" >
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link href="/">
                                <a className="navbar-brand"><img src="assets/images/logo.png" className="logo" alt="" /></a>
                            </Link>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="nav-item active"><Link href="/"><a className="nav-link">Home</a></Link></li>

                                <li className="nav-item"><Link href="/about"><a className="nav-link">About Us</a></Link></li>

                                <li className="dropdown megamenu-fw">
                                    <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">Product</a>
                                    <ul className="dropdown-menu megamenu-content" role="menu">
                                        <li>
                                            <div className="row">
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Top</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><Link href="/shop"><a>Jackets</a></Link></li>
                                                            <li><Link href="/shop"><a>Shirts</a></Link></li>
                                                            <li><Link href="/shop"><a>Sweaters & Cardigans</a></Link></li>
                                                            <li><Link href="/shop"><a>T-shirts</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Bottom</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><Link href="/shop"><a>Swimwear</a></Link></li>
                                                            <li><Link href="/shop"><a>Skirts</a></Link></li>
                                                            <li><Link href="/shop"><a>Jeans</a></Link></li>
                                                            <li><Link href="/shop"><a>Trousers</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Clothing</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><Link href="/shop"><a>Top Wear</a></Link></li>
                                                            <li><Link href="/shop"><a>Party wear</a></Link></li>
                                                            <li><Link href="/shop"><a>Bottom Wear</a></Link></li>
                                                            <li><Link href="/shop"><a>Indian Wear</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Accessories</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><Link href="/shop"><a>Bags</a></Link></li>
                                                            <li><Link href="/shop"><a>Sunglasses</a></Link></li>
                                                            <li><Link href="/shop"><a>Fragrances</a></Link></li>
                                                            <li><Link href="/shop"><a>Wallets</a></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                                    <ul className="dropdown-menu">
                                        <li><Link href="/cart"><a>Cart</a></Link></li>
                                        <li><Link href="/checkout"><a>Checkout</a></Link></li>
                                        <li><Link href="/my-account"><a>My Account</a></Link></li>
                                        <li><Link href="/wishlist"><a>Wishlist</a></Link></li>
                                        <li><Link href="/shop-detail"><a>Shop Detail</a></Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link href="/service"><a className="nav-link">Our Service</a></Link></li>
                                <li className="nav-item"><Link href="/contact-us"><a className="nav-link">Contact Us</a></Link></li>
                            </ul>
                        </div>

                        <div className="attr-nav">
                            <ul>
                                <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                                <li className="side-menu">
                                    <Link href="/cart">
                                        <a>
                                            <i className="fa fa-shopping-bag"></i>
                                            <span className="badge">{cartItemsCount}</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="side">
                        <a href="#" className="close-side"><i className="fa fa-times"></i></a>
                        <li className="cart-box">
                            <ul className="cart-list">
                                <li>
                                    <a href="#" className="photo"><img src="assets/images/img-pro-01.jpg" className="cart-thumb" alt="" /></a>
                                    <h6><a href="#">Delica omtantur </a></h6>
                                    <p>1x - <span className="price">$80.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="assets/images/img-pro-02.jpg" className="cart-thumb" alt="" /></a>
                                    <h6><a href="#">Omnes ocurreret</a></h6>
                                    <p>1x - <span className="price">$60.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="assets/images/img-pro-03.jpg" className="cart-thumb" alt="" /></a>
                                    <h6><a href="#">Agam facilisis</a></h6>
                                    <p>1x - <span className="price">$40.00</span></p>
                                </li>
                                <li className="total">
                                    <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                    <span className="float-right"><strong>Total</strong>: $180.00</span>
                                </li>
                            </ul>
                        </li>
                    </div>
                </nav>
            </header>
            <TopSearch />
        </>
    );
};

export default Header;