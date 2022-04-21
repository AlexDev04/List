import React from 'react';
import {Event, Filter, Header } from '../../components';
import {AppRoute} from "../../const";

export const CardForm = () => {
    return (
        <main className="main">
            <Header />
            <section className="main__wrapper">
                <Filter mode={AppRoute.EVENT} />
                <Event />
            </section>
        </main>
    );
};