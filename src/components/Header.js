import React from 'react';
import publicUrl from 'utils/publicUrl'
import css from './Header.module.css'

function Header() {
    return (
        <header className={css.header}>
            <div classname={css.logo}>
                <img src={publicUrl('/assets/logo.png')} alt="logo"/>
            </div>
        </header>
    )
}

export default Header;