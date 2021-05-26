import React from 'react';

const SingleProductDetails = ({pd}) => {
    console.log(pd);
    return (
        <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                        <div id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active"> <img className="d-block w-100" src="/assets/images/big-img-01.jpg" alt="First slide" /> </div>
                                <div className="carousel-item"> <img className="d-block w-100" src="/assets/images/big-img-02.jpg" alt="Second slide" /> </div>
                                <div className="carousel-item"> <img className="d-block w-100" src="/assets/images/big-img-03.jpg" alt="Third slide" /> </div>
                            </div>
                            <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                <span className="sr-only">Next</span>
                            </a>
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example-1" data-slide-to="0" className="active">
                                    <img className="d-block w-100 img-fluid" src="/assets/images/smp-img-01.jpg" alt="" />
                                </li>
                                <li data-target="#carousel-example-1" data-slide-to="1">
                                    <img className="d-block w-100 img-fluid" src="/assets/images/smp-img-02.jpg" alt="" />
                                </li>
                                <li data-target="#carousel-example-1" data-slide-to="2">
                                    <img className="d-block w-100 img-fluid" src="/assets/images/smp-img-03.jpg" alt="" />
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-6">
                        <div className="single-product-details">
                            <h2>Fachion Lorem ipsum dolor sit amet</h2>
                            <h5> <del>$ {pd.price.productPrice}</del> ${pd.price.sellingPrice}</h5>
                            <p className="available-stock"><span> More than {pd.available} available / <a href="#">{pd.sold} sold </a></span></p>
                            <h4>Short Description:</h4>
                            <p> {pd.details} </p>
                            <ul>
                                <li>
                                    <div className="form-group size-st">
                                        <label className="size-label">Size</label>
                                        <select id="basic" className="selectpicker show-tick form-control">
                                            <option value="0">Size</option>
                                            <option value="0">S</option>
                                            <option value="1">M</option>
                                            <option value="1">L</option>
                                            <option value="1">XL</option>
                                            <option value="1">XXL</option>
                                            <option value="1">3XL</option>
                                            <option value="1">4XL</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-group quantity-box">
                                        <label className="control-label">Quantity</label>
                                        <input className="form-control" value="0" min="0" max="20" type="number" />
                                    </div>
                                </li>
                            </ul>

                            <div className="price-box-bar">
                                <div className="cart-and-bay-btn">
                                    <a className="btn hvr-hover" data-fancybox-close="" href="#">Buy New</a>
                                    <a className="btn hvr-hover" data-fancybox-close="" href="#">Add to cart</a>
                                </div>
                            </div>

                            <div className="add-to-btn">
                                <div className="add-comp">
                                    <a className="btn hvr-hover" href="#"><i className="fas fa-heart"></i> Add to wishlist</a>
                                    <a className="btn hvr-hover" href="#"><i className="fas fa-sync-alt"></i> Add to Compare</a>
                                </div>
                                <div className="share-bar">
                                    <a className="btn hvr-hover" href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                                    <a className="btn hvr-hover" href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a>
                                    <a className="btn hvr-hover" href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                    <a className="btn hvr-hover" href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a>
                                    <a className="btn hvr-hover" href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default SingleProductDetails;