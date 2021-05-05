import React, {useEffect, useState} from 'react';
import './App.scss';
import PoemsDisplay from './components/PoemsDisplay';
import NewPoems from './components/NewPoems';
import Search from './components/Search';
import SelectedPoem from './components/SelectedPoem';
import { retrievePoems, postPoemsToDb, readyDataForEntry } from './utils/utils';

function App() {
    const [randomPoems, setRandomPoems] = useState([]);
    const [searchedPoems, setSearchedPoems] = useState([])

    useEffect(() => {
        const manageNewPoems = async () => {
            const initialPoems = await retrievePoems();

            setRandomPoems(initialPoems);
            postPoemsToDb(readyDataForEntry(initialPoems));
        }
        manageNewPoems();
    }, []);

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
                <Search setMethod={setSearchedPoems}/>
                <PoemsDisplay
                header={['Results']}
                poems={searchedPoems}
                />
            </section>
        </div>
       <SelectedPoem poem={searchedPoems[0]} />
    </div>
  );
}

export default App;
