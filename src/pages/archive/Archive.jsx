import React from 'react';
import { Board, Header } from '../../components';
import { useParams } from 'react-router-dom';

export const Archive = () => {

    const { id } = useParams();

    console.log('id', id)

    return (
        <main className="main">
            <Header />
            <section className="main__wrapper">
                <Board />
            </section>
        </main>
    )
}