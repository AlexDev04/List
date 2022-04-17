import React from 'react';
import { AppRoute } from '../../const';
import { NavLink, useLocation } from 'react-router-dom';

export const Header = () => {

    const pathname = useLocation().pathname.slice(0, 8);
    console.log(pathname);
    console.log(AppRoute.ARCHIVE.slice(0, 8));

    return (
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
                <div className="main__header-group-lnk">
                    <NavLink to="/" className={`main__header-lnk ${pathname === AppRoute.MAIN && 'lnk-active'}`}>События</NavLink>
                    <NavLink to="/archive" className={`main__header-lnk ${pathname === AppRoute.ARCHIVE.slice(0, 8) && 'lnk-active'}`}>Архив</NavLink>
                </div>
            </section>
        </section>
    )
}