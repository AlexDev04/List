import React from 'react';
import {Event, Board, Filter, Header} from '../../components';
import {AppRoute} from "../../const";

export const CardForm = () => {
    return (
        <main className="main">
            <Header mode={AppRoute.MAIN}/>
            <section className="main__wrapper">
                <Filter mode={AppRoute.EVENT} />
                <Board mode={AppRoute.EVENT}/>
            </section>
        </main>
    );
};