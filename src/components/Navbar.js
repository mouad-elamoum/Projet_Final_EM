import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/signin">Sign In</Link>
      // Ajoutez d'autres liens selon vos besoins
        </nav>
    );
};

export default Navbar;
