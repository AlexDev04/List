import React from 'react';
import { Header, Filter, Board } from '../../components';

export const Main = ({events}) => {
    return (
        <main className="main">
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Board events={events} />
            </section>
        </main>

    )
}
