import React from 'react';
import { Board, Header } from '../../components';
import { AppRoute } from '../../const';
import { useParams } from 'react-router-dom';

export const Archive = (props) => {

    const {id} = useParams();

    const render = () => {
        return id ? 'id есть' : 'id нет'
    };

    console.log(id);

    return (
        <>
            <Header mode={AppRoute.ARCHIVE}/>
            <section className="main__wrapper">
                <Board mode={AppRoute.ARCHIVE}/>
            </section>
        </>
    )
}