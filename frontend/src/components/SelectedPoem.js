import './SelectedPoem.scss';

function SelectedPoem({poem}) {
    const name = poem.poet.name !== undefined ? poem.poet.name : poem.poet;

    return (
        <section className='selected-poem'>
            <div className='title-author'>
                <p>{name} - {poem.title}</p>
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