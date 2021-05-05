import React, {useState, useEffect} from 'react';
import { retrievePoems, postPoemsToDb, readyDataForEntry } from '../utils/utils';

function NewPoems({setMethod}) {
    const requestNewPoems = () => {
        const manageNewPoems = async () => {
            const initialPoems = await retrievePoems();

            setMethod(initialPoems);
            postPoemsToDb(readyDataForEntry(initialPoems));
        }
        manageNewPoems();
    }

    return (
        <div>
            <button onClick={() => {requestNewPoems()}}>New Poems</button>
        </div>
    )
}

export default NewPoems;