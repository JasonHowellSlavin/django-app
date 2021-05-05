import React, {useState, useEffect} from 'react';

function SelectedPoem({poem}) {
    return (
        <section className='selected-poem'>
            <div className='title-author'>
                <p>George Eliot - Feild Bling</p>
            </div>
            <div className='poem'>
                <pre>
                    Lorem Ipsum text text text
                </pre>
            </div>
        </section>  
    )
}

export default SelectedPoem;