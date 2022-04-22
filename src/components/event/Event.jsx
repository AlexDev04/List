import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import moment from 'moment';

export const Event = ({data}) => {

    const [info, setInfo] = useState('');
    useEffect(() => setInfo(data), [data])
    console.log(`info: ${info}`)

    // const [id, setId] = useState('');
    // const params = useParams();
    // useEffect(() => setId(params.id), [params.id]);
    // console.log(id);

    let heading, task;
    if (info._id){
        heading = `Изменение события ${info._id}`;
        task = 'Сохранить'
    } else {
        heading = `Добавление события`;
        task = 'Добавить'
    }

    console.log(info);

    return (
        <section className="board">
            <form className="board__form">
                <h2 className="board__title">{heading}</h2>
                <fieldset className="board__field board__field--theme">
                    <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
                    <textarea
                        type="text"
                        className="board__input board__input--theme"
                        name="theme"
                        value={info.theme}
                        required
                    ></textarea>
                </fieldset>
                <fieldset className="board__field board__field--comment">
                    <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
                    <textarea
                        type="text"
                        className="board__input board__input--comment"
                        name="comment"
                        value={info.comment}
                        required
                    ></textarea>
                </fieldset>
                <fieldset className="board__field board__field--date">
                    <label htmlFor="date" className="board__label board__label--date">Дата:</label>
                    <input
                        type="datetime-local"
                        className="board__input board__input--date"
                        name="date"
                        value={moment(info.date).format('YYYY-MM-DDThh:mm')}
                    />
                </fieldset>
                <div className="btns">
                    <button type="submit" className="btn-submit">{task}</button>
                    <button type="reset" className="btn-reset">Очистить</button>
                </div>
            </form>
        </section>
    );
};