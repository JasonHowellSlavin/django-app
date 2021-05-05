import React, {useState, useEffect} from 'react';

function NewPoems({setMethod}) {
    const requestNewPoems = async () => {
        fetch('https://www.poemist.com/api/v1/randompoems')
        .then((response) => {
            return response.json();
        }).then((resJson) => {
            setMethod(resJson);
        })
        .catch((error) => console.warn(error));
    }

    return (
        <div>
            <button onClick={() => {requestNewPoems()}}>New Poems</button>
        </div>
    )
}

export default NewPoems;