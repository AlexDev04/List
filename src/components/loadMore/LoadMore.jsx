import React from 'react';

export const LoadMore = ({...params}) => {
    return (
        <button
            className="load-more"
            type="button"
            onClick={params.onClick}
        >
            Загрузить еще
        </button>
    );
};