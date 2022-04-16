import React from 'react';
import {useLocation, useParams} from "react-router-dom";

export const NotFound = () => {

    console.log(useLocation());
    console.log(useParams());

    return (
        <div>
            Not found
        </div>
    );
};