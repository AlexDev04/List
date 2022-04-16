import React from 'react';
import { Board, Header } from '../../components';
import { AppRoute } from '../../const';
import { useParams } from 'react-router-dom';

export const Archive = () => {

    const { id } = useParams();

    const kek = () => {
        return id ? `ID есть, вот он - ${id}` : 'Нет ID никакого'
    }

    console.log('id', id)

    return (
        <>
            <Header mode={AppRoute.ARCHIVE}/>
            <section className="main__wrapper">
                <div>{kek()}</div>
                <Board mode={AppRoute.ARCHIVE}/>
            </section>
        </>
    )
}