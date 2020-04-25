import React from 'react';
import css from './Navbar.module.css';
import publicUrl from 'utils/publicUrl';
import  {Link} from 'react-router-dom';
import {HomeRounded, MessageRounded, AddRounded, PersonRounded} from '@material-ui/icons'

function Navbar() {
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <Link to='/'>
                    <HomeRounded fontSize='large' />
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to='/responses'>
                    <MessageRounded fontSize='large' />
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to='/createNew'>
                    <AddRounded fontSize='large' />
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to='/profile'>
                    <PersonRounded fontSize='large' />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;