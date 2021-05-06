import React, { useState } from 'react';
import './Pagination.scss';

export function Pagination({pageStart, pageEnd, setResultsPageMethod, allPoems}) {
    const [currentPage, setCurrentPage] = useState(pageStart);

    const incrementPage = () => {
        const currentIndex = currentPage - 1;

        if (currentPage + 1 <= pageEnd) {
            setCurrentPage(currentPage + 1);
            setResultsPageMethod(allPoems[currentIndex + 1].poems);
        }
    }

    const decrementPage = () => {
        const currentIndex = currentPage - 1;

        if (currentPage - 1 >= 1) {
            setCurrentPage(currentPage - 1);
            setResultsPageMethod(allPoems[currentIndex - 1].poems);
        }
    }

    return (
        <div className='pagination'>
            <button onClick={() => decrementPage()}>{'<'}</button>
            <p>{currentPage} of {pageEnd}</p>
            <button onClick={() => incrementPage()}>{'>'}</button>
        </div>
    )
}