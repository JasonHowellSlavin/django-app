import React, {useState, useEffect, useRef} from 'react';
import { debounce } from 'debounce';
import { formatDbSearchResults } from '../utils/utils';

function Search({setMethod}) {
    const [searchInput, setSearchInput] = useState('');
    const search = (value) => {
            const searchValue = {search_value: value}

            return fetch('http://localhost:8000/api/search/', {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(searchValue),
                })
                .then((response) => {
                    return response.json();
                })
                .then((resJson) => {
                    const formatted = formatDbSearchResults(resJson.searched);
            
                    setMethod(formatted);
                })
                .catch((error) => console.warn(error));
    }
    const searchDebouncer = useRef(debounce(search, 2000));

    const handleChange = (event) => {
        let value = event.currentTarget.value;

        setSearchInput(value);
        searchDebouncer.current(value);
    }

    return (
          <div className='poem-search'>
            <label htmlFor='search'></label>
            <input id='search' 
                   placeholder='Search for poems...'
                   value={searchInput}
                   onChange={(event) => {handleChange(event)}} />
            <button onClick={() => setSearchInput('')}>clear</button>
          </div>
    )
}

export default Search;