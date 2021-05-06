import React, {useEffect, useState} from 'react';
import './App.scss';
import PoemsDisplay from './components/PoemsDisplay';
import NewPoems from './components/NewPoems';
import Search from './components/Search';
import SelectedPoem from './components/SelectedPoem';
import { retrievePoems, postPoemsToDb, readyDataForEntry, formatDbSearchResults, lastPage } from './utils/utils';
import { Pagination } from './components/Pagination';

function App() {
    const [randomPoems, setRandomPoems] = useState([]);
    const [searchedPoems, setSearchedPoems] = useState([]);
    const [resultsPage, setResultsPage] = useState([]);
    const [currentPoem, setCurrentPoem] = useState({poet: 'Poem Author', title: 'Title', content: 'Poem Content Here'});

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
                <h2>New Poems</h2>
                <NewPoems setMethod={setRandomPoems} />
                <PoemsDisplay
                    header={['Name', 'Title']}
                    poems={randomPoems}
                    setCurrentPoemMethod={setCurrentPoem}
                />
            </section>
            <section className='display-wrapper'>
                <h2>Search</h2>
                <Search 
                    setSearchedMethod={setSearchedPoems}
                    setResultsPageMethod={setResultsPage}
                />
                <PoemsDisplay
                    header={['Results']}
                    poems={formatDbSearchResults(resultsPage)}
                    setCurrentPoemMethod={setCurrentPoem}
                />
                {resultsPage.length > 0 && <Pagination
                    pageStart={1}
                    pageEnd={lastPage(searchedPoems)}
                    setResultsPageMethod={setResultsPage}
                    allPoems={searchedPoems}
                />}
            </section>
        </div>
       {currentPoem && <SelectedPoem poem={currentPoem} />}
    </div>
  );
}

export default App;
