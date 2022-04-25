import React from 'react';
import {Card, Event, LoadMore, NoEvents, Sorting} from '../';
import {AppRoute} from "../../const";
import {useLocation} from "react-router-dom";

export const Board = ({events}) => {

    const pathname = useLocation().pathname

    return (
        <section className="board">
                {/*<NoEvents />*/}
            {pathname !== AppRoute.ARCHIVE
                && <Sorting />
            }
            <div className="board__events">
                {events.map(event => <Card {...event} key={event._id} />)}
            </div>
            <LoadMore />
        </section>
    )
}