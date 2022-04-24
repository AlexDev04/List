import React from 'react';
import { Header, Filter, Board } from '../../components';
import { events } from '../../store/index';
import { observer } from 'mobx-react-lite';

export const Main = observer(() => {

    const { notArchiveData } = events;

    return (
        <main className="main">
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Board events={notArchiveData} />
            </section>
        </main>

    )
})
