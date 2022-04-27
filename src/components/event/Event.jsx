import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { editEvent, addEvent } from '../../API';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { events } from '../../store';

export const Event = observer(({data}) => {

    const [info, setInfo] = useState('');
    useEffect(() => setInfo(data), [data])
    console.log(info)
    // console.log({...info})

    const history = useHistory();

    let heading, task;
    if (info._id){
        heading = `Изменение события ${info._id}`;
        task = 'Сохранить'
    } else {
        heading = `Добавление события`;
        task = 'Добавить'
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        info._id
        ? editEvent({
            id: info._id,
            ...info
        })
        : addEvent({
            theme: info.theme,
            comment: info.comment,
            date: info.date,
            favorite: info.favorite,
        })
        history.push('/');
        events.fetch();
    }

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
                        onChange={evt => setInfo({...info, theme: evt.target.value})}
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
                        onChange={evt => setInfo({...info, comment: evt.target.value})}
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
                        onChange={evt => setInfo({...info, date: evt.target.value})}
                    />
                </fieldset>
                <div className="btns">
                    <button
                        type="submit"
                        className="btn-submit"
                        onClick={handleSubmit}
                    >
                        {task}
                    </button>
                    <button type="reset" className="btn-reset">Очистить</button>
                </div>
            </form>
        </section>
    );
})