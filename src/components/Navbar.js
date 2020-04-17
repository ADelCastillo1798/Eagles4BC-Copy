import React from 'react';
import css from './Navbar.module.css';
import publicUrl from 'utils/publicUrl';

function Navbar() {
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                "needs"
            </div>
            <div className={css.navItem}>
                "offers"
            </div>
            <div className={css.navItem}>
                "responses"
            </div>
            <div className={css.navItem}>
                "profile"
            </div>
        </nav>
    )
}

export default Navbar;