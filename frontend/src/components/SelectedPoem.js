import React, {useState, useEffect} from 'react';

function SelectedPoem({poem}) {
    return (
        <section className='selected-poem'>
            <div className='title-author'>
                <p>{poem.poet} - {poem.title}</p>
            </div>
            <div className='poem'>
                <pre>
                    {decodeURIComponent(poem.content)}
                </pre>
            </div>
        </section>  
    )
}

export default SelectedPoem;