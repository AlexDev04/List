import React from 'react';
import { Link, useLocation, useParams } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

export const NotFound = () => {

    console.log(useLocation());
    console.log(useParams());

    const style = {
        div: {
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
        },
        bounce: {
            width: '200px',
            height: '200px'
        },
        bouncer: {
            padding: '5%'
        },
        text: {
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center',
        },
        btn: {
            backgroundColor: 'red',
            padding: '5%',
            textDecoration: 'none',
            color: 'white',
        }

    }

    return (
        <div style={style.div}>
            <div style={style.bouncer}>
                <Bounce >
                    <img src="sad.svg" style={style.bounce} />
                </Bounce>
            </div>
            <div style={style.text}>
                <h1>404 Error</h1>
                <p>Страница не найдена. Проследуйте по ссылке ниже</p>
                <Link to="/" style={style.btn}> Вернуться на главную </Link>
            </div>
        </div>

    );
};