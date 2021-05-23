import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <a 
                href="#" 
                id="back-to-top" 
                title="Back to top" 
                style={{display: "none"}}
            >&uarr;
            </a>
        </>
    );
};

export default Layout;