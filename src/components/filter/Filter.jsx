import React from "react";
import {AppRoute} from "../../const";
import {Link, useLocation } from "react-router-dom";

export const Filter = () => {

    const pathname = useLocation().pathname.slice(0, 8);
    console.log(pathname);
    console.log(AppRoute.ARCHIVE.slice(0, 8));

    return (
        <section className="main__filter filter">
            <input
                type="radio"
                id="filter__all"
                className="filter__input visually-hidden"
                name="filter"
                checked
            />
            <label htmlFor="filter__all" className="filter__label">
                Все <span className="filter__all-count count">13</span>
            </label>
            <input
                type="radio"
                id="filter__overdue"
                className="filter__input visually-hidden"
                name="filter"
            />
            <label htmlFor="filter__overdue" className="filter__label">
                Прошедшие <span className="filter__overdue-count count">5</span>
            </label>
            <input
                type="radio"
                id="filter__today"
                className="filter__input visually-hidden"
                name="filter"
                disabled
            />
            <label htmlFor="filter__today" className="filter__label">
                Сегодня <span className="filter__today-count count">0</span>
            </label>
            <input
                type="radio"
                id="filter__future"
                className="filter__input visually-hidden"
                name="filter"
                disabled
            />
            <label htmlFor="filter__future" className="filter__label">
                Будущие <span className="filter__future-count count">0</span>
            </label>
            <input
                type="radio"
                id="filter__favorite"
                className="filter__input visually-hidden"
                name="filter"
            />
            <label htmlFor="filter__favorite" className="filter__label">
                Избранное <span className="filter__favorite-count count">1</span>
            </label>

            {pathname === AppRoute.MAIN
                &&
                <Link to="/event" name="control" className="btn-add">
                    Создать
                </Link>
            }
        </section>
    );
};