import './PoemsDisplay.scss';

function PoemsDisplay({header, poems, setCurrentPoemMethod}) {
    return (
        <section className='poems-display'>
            <div className='poem-conatiner'>
                <div className='container-header'>
                    {header.map(item => <h3 key={`header:${item}`}>{item}</h3>)}
                </div>
                <section style={poems.length < 1 ? {border: 'none'} : {}}>
                    {poems.map((item, index) => {
                        return (
                            <div className='poem-item' key={`poem-item${item.title}${index}`} onClick={() => setCurrentPoemMethod(item)}>
                                <p>{item.title}</p>
                                <p>{item.poet.name ? item.poet.name : item.poet}</p>
                            </div>
                        )
                    })}
                </section>
            </div>
      </section>
    )
}

export default PoemsDisplay;