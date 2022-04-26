import React from "react";
import {AppRoute} from "../../const";
import {Link, useLocation } from "react-router-dom";
import { events } from "../../store";
import { observer } from "mobx-react-lite";
import { action } from "mobx";

export const Filter = observer(() => {

    const { 
        notArchiveData,
        pastData,
        todayData,
        futureData,
        favoriteData
     } = events

     const handleFilter = action((evt) => {
         events.filtredData = events[evt.target.value]
     })

    const { pathname } = useLocation();

    console.log(pathname) 

    return (
        <section className="main__filter filter">
            <input
                type="radio"
                id="filter__all"
                className="filter__input visually-hidden"
                name="filter"
                value="notArchiveData"
                disabled={!notArchiveData.length}
                onChange={handleFilter}
            />
            <label htmlFor="filter__all" className="filter__label">
                Все <span className="filter__all-count count">{notArchiveData.length}</span>
            </label>
            <input
                type="radio"
                id="filter__overdue"
                className="filter__input visually-hidden"
                name="filter"
                value="pastData"
                disabled={!pastData.length}
                onChange={handleFilter}
            />
            <label htmlFor="filter__overdue" className="filter__label">
                Прошедшие <span className="filter__overdue-count count">{pastData.length}</span>
            </label>
            <input
                type="radio"
                id="filter__today"
                className="filter__input visually-hidden"
                name="filter"
                value="todayData"
                disabled={!todayData.length}
                onChange={handleFilter}
            />
            <label htmlFor="filter__today" className="filter__label">
                Сегодня <span className="filter__today-count count">{todayData.length}</span>
            </label>
            <input
                type="radio"
                id="filter__future"
                className="filter__input visually-hidden"
                name="filter"
                value="futureData"
                disabled={!futureData.length}
                onChange={handleFilter}
            />
            <label htmlFor="filter__future" className="filter__label">
                Будущие <span className="filter__future-count count">{futureData.length}</span>
            </label>
            <input
                type="radio"
                id="filter__favorite"
                className="filter__input visually-hidden"
                name="filter"
                value="favoriteData"
                disabled={!favoriteData.length}
                onChange={handleFilter}
            />
            <label htmlFor="filter__favorite" className="filter__label">
                Избранное <span className="filter__favorite-count count">{favoriteData.length}</span>
            </label>

            {pathname === AppRoute.MAIN
                &&
                <Link to="/event" name="control" className="btn-add">
                    Создать
                </Link>
            }
        </section>
    );
})