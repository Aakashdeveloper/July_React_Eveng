import React from 'react';
import { Link } from 'react-router-dom';

const Header = ( ) => {
    return(
        <header>
            <div>
                <Link to="/">My NareshIT News</Link>
            </div>
        </header>
    )
}

export default Header;