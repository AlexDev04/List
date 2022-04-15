import React from 'react';
import {Card, Event, LoadMore, NoEvents, Sorting} from '../';
import {AppRoute} from "../../const";

export const Board = ({mode}) => {
    return (
        <section className="board">
                {/*<NoEvents />*/}
            {mode === AppRoute.MAIN
                ?
                <>
                    <Sorting />
                    <div className="board__events">
                        <Card />
                    </div>
                    <LoadMore />
                </>
                :
                <>
                    <div className="board__events">
                        <Card />
                    </div>
                    <LoadMore />
                </>
            }
        </section>
    )
}