import React from 'react';
import { observer } from 'mobx-react-lite';
import { events } from '../../store';
import { action } from 'mobx';
import moment from 'moment';

export const Sorting = observer(() => {

    const handleSort = action((evt) => {
        switch(evt.target.value) {
            case "notArchiveData":
                break;
            case "increaseData":
                events.filtredData = events.filtredData.slice().sort((x, y) => moment(x.date).isAfter(moment(y.date), 'D')? 1 : -1);
                break;
            case "decreaseData":
                events.filtredData = events.filtredData.slice().sort((x, y) => moment(x.date).isBefore(moment(y.date), 'D')? 1 : -1);
                break;
        }
    })

    // const {
    //     increaseData,
    //     decreaseData,
    //     notArchiveData
    // } = events

    // const handleSort = action((evt) => {
    //     events.filtredData = events[evt.target.value]
    // })

    return (
        <div className="board__filter-list">
            <span className="board__filter--title">Сортировка:</span>
            <input
                type="radio"
                id="board__filter-default"
                className="board__filter visually-hidden"
                name="board-filter"
                value="notArchiveData"
                onClick={handleSort}
            />
            <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>
            <input
                type="radio"
                id="board__filter-new"
                className="board__filter visually-hidden"
                name="board-filter"
                value="decreaseData"
                onClick={handleSort}
            />
            <label htmlFor="board__filter-new" className="board__filter-label">Сначала новые</label>
            <input
                type="radio"
                id="board__filter-old"
                className="board__filter visually-hidden"
                name="board-filter"
                value="increaseData"
                onClick={handleSort}
            />
            <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
        </div>
    );
})