import React from 'react';
import { Board, Header } from '../../components';
import { AppRoute } from '../../const';
import { useParams } from 'react-router-dom';

export const Archive = (props) => {

    const { id } = props.match.params;
    // const { id } = useParams();

    const kek = () => {
        return id ? `ID есть, вот он - ${id}` : 'Нет ID никакого'
    }

    console.log('id', id)

    // const {id} = useParams();
    //
    // const render = () => {
    //     return id ? 'id есть' : 'id нет'
    // };
    //
    // console.log(useParams());

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