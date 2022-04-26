import React from 'react';
import { AppRoute } from '../../const';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { clearArchive } from '../../API';
import { events } from '../../store';

export const Header = () => {

    const pathname = useLocation().pathname

    const handleDelete = () => {
        clearArchive();
        events.fetch();
    }

    return (
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
                <div className="main__header-group-lnk">
                    <NavLink to="/" className={`main__header-lnk ${pathname === AppRoute.MAIN && 'lnk-active'}`}>События</NavLink>
                    <NavLink to="/archive" className={`main__header-lnk ${pathname === AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</NavLink>
                    {pathname === AppRoute.ARCHIVE && 
                        <button
                            className="main__header-del"
                            onClick={handleDelete}
                        >
                            Удалить все
                        </button>
                    }
                </div>
            </section>
        </section>
    )
}