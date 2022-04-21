import React from 'react';
import { Board, Header } from '../../components';
import { useParams } from 'react-router-dom';

export const Archive = ({events}) => {

    const { id } = useParams();

    console.log('id', id)

    const archiveEvts = events.filter(x => x.archive)

    return (
        <main className="main">
            <Header />
            <section className="main__wrapper">
                <Board events={archiveEvts} />
            </section>
        </main>
    )
}