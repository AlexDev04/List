import React from 'react';
import { Board, Header } from '../../components';
import { AppRoute } from '../../const';

export const Archive = () => {
    return (
        <>
            <Header mode={AppRoute.ARCHIVE}/>
            <section className="main__wrapper">
                <Board mode={AppRoute.ARCHIVE}/>
            </section>
        </>
    )
}