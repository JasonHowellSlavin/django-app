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
            <button className='new-poems' onClick={() => {requestNewPoems()}}>Get New Poems</button>
        </div>
    )
}

export default NewPoems;