import React, {useEffect, useState} from 'react';
import fetch from 'node-fetch';
import './App.scss';
import PoemsDisplay from './components/PoemsDisplay';
import NewPoems from './components/NewPoems';
import Search from './components/Search';
import SelectedPoem from './components/SelectedPoem';

function App() {
    const [randomPoems, setRandomPoems] = useState([]);
    const [backend, setBackend] = useState([])

    useEffect(() => {
        fetch('https://www.poemist.com/api/v1/randompoems')
        .then((response) => {
            return response.json();
        })
        .then((resJson) => {
            console.log(resJson, 'response')
            setRandomPoems(resJson);
        })
        .catch((error) => console.warn(error));
    }, []) 

    useEffect(() => {
        const data = [
            {author_title: 'Gravitas', poem_content: 'This is a new peom'},
            {author_title: 'Rambo', poem_content: 'This speom'},
            {author_title: 'Dim Mak', poem_content: 'Aspo'},
            {author_title: 'Dim Mak', poem_content: 'Aspo'},
        ]

        fetch('http://localhost:8000/api/update_many/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            return response.json();
        })
        .then((resJson) => {
            console.log(resJson, 'response')
            setBackend(resJson);
        })
        .catch((error) => console.warn(error));
    }, []) 


  return (
  	<div className="App">
        <header>
            <h1>Poemist</h1>
        </header>
        <div className='content-wrapper'>
            <section className='display-wrapper'>
                <NewPoems setMethod={setRandomPoems} />
                <PoemsDisplay
                header={['Name', 'Title']}
                poems={randomPoems}
                />
            </section>
            <section className='display-wrapper'>
                <Search />
                <PoemsDisplay
                header={['Results']}
                poems={[{ poet: 'George Eliot', title: 'Field Bling' }]}
                />
            </section>
        </div>
       <SelectedPoem poem='' />
       <div><pre>{randomPoems[0] !== undefined && randomPoems[0].content}</pre></div>
    </div>
  );
}

export default App;
