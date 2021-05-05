import React, {useState, useEffect} from 'react';

function PoemsDisplay({header, poems}) {
    console.log('Poems! ', poems)

    return (
        <section className='poems-display'>
            <div className='poem-conatiner'>
                <div className='container-header'>
                    {header.map(item => <h3>{item}</h3>)}
                </div>
                <section>
                    <div className='poem-item'>
                        {poems.map(item => <p>{item.title}</p>)}
                    </div>
                    <div className='poem-item'> 
                        {poems.map(item => <p>{item.poet.name ? item.poet.name : item.poet}</p>)}
                    </div>
                </section>
            </div>
      </section>
    )
}

export default PoemsDisplay;