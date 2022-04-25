import React from 'react';
import { Board, Header } from '../../components';
import { useParams } from 'react-router-dom';
import { events } from '../../store/index';
import { observer } from 'mobx-react-lite';

export const Archive = observer(() => {

    const { archiveData } = events;

    return (
        <main className="main">
            <Header />
            <section className="main__wrapper">
                <Board events={archiveData} />
            </section>
        </main>
    )
})