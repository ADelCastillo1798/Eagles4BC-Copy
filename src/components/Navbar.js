import React from 'react';
import css from './Navbar.module.css';
import publicUrl from 'utils/publicUrl';
import  {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <Link to='/'>
                    🏠
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to='/responses'>
                    📩
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to='/createNew'>
                    ➕
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to='/profile'>
                    😊
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;