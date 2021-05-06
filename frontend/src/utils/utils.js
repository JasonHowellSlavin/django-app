import fetch from 'node-fetch';

export const readyDataForEntry = (response) => {
    return response.reduce((accum, record) => {
        accum.push({
            author_title: `${record.poet.name} - ${record.title}`,
            poem_content: record.content,
        });
        return accum;
    }, [])
}

export const retrievePoems = () => {
    return fetch('https://www.poemist.com/api/v1/randompoems')
    .then((response) => {
        return response.json();
    })
    .catch((error) => console.warn(error));
}

export const postPoemsToDb = (dbData) => {
    return fetch('http://localhost:8000/api/update_many/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dbData),
        })
        .then((response) => {
            return response.json();
        })
        .catch((error) => console.warn(error));
}

export const formatDbSearchResults = (results) => {
    return results.reduce((accum, item) => {
        const poem = {
            poet: item.author_title.split(' - ')[0].trim(),
            title: item.author_title.split(' - ')[1].trim(),
            content: item.poem_content
        }
        accum.push(poem);
        return accum;
    }, [])
}

export const lastPage = (searchData) => {
    if (searchData.length > 0) {
        return searchData[searchData.length - 1].page_num;
    }

    return 1;
}