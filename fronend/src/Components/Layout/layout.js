// Layout.js
import React from 'react';
import NavBar from '../Navbar/NavBar.js';
import Footer from '../Footer/footer.js';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
