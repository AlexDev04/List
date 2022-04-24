import React from 'react';
import {Event, Filter, Header } from '../../components';
import {AppRoute} from "../../const";
import { useParams } from 'react-router-dom';
import { events } from '../../store/index';
import { observer } from 'mobx-react-lite';

export const CardForm = observer(() => {

    let data;
    const id = useParams().id;

    const { allData } = events;

    if(id) {
        console.log(id + ' id есть');
        let curEl = allData.find(event => event._id === id);
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
})