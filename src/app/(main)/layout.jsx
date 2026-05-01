import Footer from '@/Components/Shared/Footer';
import Navbar from '@/Components/Shared/Navbar';
import React from 'react';

const Layout = ( { children }) => {
    return (
        <>
           <div className="bg-(--dark7)">
             <Navbar />
            { children }
            <Footer />
           </div>
        </>
    );
};

export default Layout;