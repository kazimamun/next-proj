import React from 'react';

const TopSearch = () => {
    return (
        <div className="top-search">
            <div className="container">
                <div className="input-group">
                    <span className="input-group-addon"><i class="fa fa-search"></i></span>
                    <input type="text" class="form-control" placeholder="Search" />
                    <span className="input-group-addon close-search"><i class="fa fa-times"></i></span>
                </div>
            </div>
        </div>
    );
};

export default TopSearch;