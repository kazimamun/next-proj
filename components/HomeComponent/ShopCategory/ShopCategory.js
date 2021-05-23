import React from 'react';

const Shop = ({ category }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="shop-cat-box">
                <img className="img-fluid" src={`assets/images/${category.img}.jpg`} alt="" />
                <a className="btn hvr-hover" href="#">{category.name}</a>
            </div>
        </div>
    )
}

const ShopCategory = ({ categories }) => {
    return (
        <div className="categories-shop">
            <div className="container">
                <div className="row">
                    {
                        categories.map(category => <Shop key={category.id} category={category} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;