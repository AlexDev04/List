import React from 'react';
import {Event, Filter, Header } from '../../components';
import {AppRoute} from "../../const";
import { events } from '../../mocks';
import { useParams } from 'react-router-dom';

export const CardForm = () => {

    let data;
    const id = useParams().id;

    if(id) {
        console.log(id + ' id есть');
        let curEl = events.find(event => event._id === id);
        data = curEl;
        if (data === undefined) {
            data = {
                _id: null
            };
        }
        console.log(data);
    } else {
        console.log('id нет')
        data = {
            _id: null
        };
    }


    return (
        <main className="main">
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Event data={data} />
            </section>
        </main>
    );
};