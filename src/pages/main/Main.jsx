import React from 'react';
import { Header, Filter, Board } from '../../components';

export const Main = () => {
    return (
        <main className="main">
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Board />
            </section>
        </main>

    )
}
