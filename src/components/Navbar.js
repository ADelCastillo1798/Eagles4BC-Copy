import React from 'react';
import css from './Navbar.module.css';
import publicUrl from 'utils/publicUrl';
import  {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <Link to='/'>
                    <span role="img" aria-label="home">🏠</span>
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to='/responses'>
                    <span role="img" aria-label="mail">📩</span>
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to='/createNew'>
                    <span role="img" aria-label="plus">➕</span>
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to='/profile'>
                    <span role="img" aria-label="smiley">😊</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;