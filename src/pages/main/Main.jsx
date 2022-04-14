import React from 'react';
import { Header, Filter, Board } from '../../components';
import { AppRoute } from '../../const.js';

export const Main = () => {
    return (
        <main className="main">
            <Header mode={AppRoute.MAIN}/>
            <section className="main__wrapper">
                <Filter mode={AppRoute.MAIN} />
                <Board mode={AppRoute.MAIN}/>
            </section>
        </main>

    )
}
