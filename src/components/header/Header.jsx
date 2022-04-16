import React from 'react';
import { AppRoute } from '../../const';
import { NavLink, useLocation, useParams} from 'react-router-dom';

export const Header = ({mode}) => {

    console.log(useLocation());
    console.log(useParams());

    return (
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
                <div className="main__header-group-lnk">
                    <NavLink to="/" className={`main__header-lnk ${mode === AppRoute.MAIN && 'lnk-active'}`}>События</NavLink>
                    <NavLink to={AppRoute.ARCHIVE} className={`main__header-lnk ${mode === AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</NavLink>
                </div>
            </section>
        </section>
    )
}