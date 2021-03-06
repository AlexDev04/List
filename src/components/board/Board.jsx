import React from 'react';
import {Card, Event, LoadMore, NoEvents, Sorting} from '../';
import {AppRoute} from "../../const";
import {useLocation} from "react-router-dom";

export const Board = () => {

    const pathname = useLocation().pathname.slice(0, 8);
    console.log(pathname);
    console.log(AppRoute.ARCHIVE.slice(0, 8));

    return (
        <section className="board">
                {/*<NoEvents />*/}
            {pathname !== AppRoute.ARCHIVE.slice(0, 8)
                && <Sorting />
            }
            <div className="board__events">
                <Card />
            </div>
            <LoadMore />
        </section>
    )
}