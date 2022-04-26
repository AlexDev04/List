import React, { useState } from 'react';
import { Card, LoadMore, NoEvents, Sorting } from '../';
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom";

export const Board = ({events}) => {

    const pathname = useLocation().pathname

    const [step, setStep] = useState(10);

    const handleLoadMore = () => {
        console.log('click');
        events.length >= step ? setStep(step + 10) : setStep(events.length);
    }

    return (
        <section className="board">
                {/*<NoEvents />*/}
            {pathname !== AppRoute.ARCHIVE
                && <Sorting />
            }
            <div className="board__events">
                {events.slice(0, step).map(event => <Card {...event} key={event._id} />)}
            </div>
            <LoadMore onClick={handleLoadMore} />
        </section>
    )
}