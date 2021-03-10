import React, {useState, useEffect} from 'react'

function PokeForm() {

    const [pokemons, setPokemons] = useState(null);
    const [temp, setTemp] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
            .then(response => response.json())
            .then(response => setTemp(response.results))
    }, []);

    function handleSubmit(event) {
        setPokemons(temp);

        // console.log(pokemons);
    }

    return (
        <div>
            <button onClick={handleSubmit}>Fetch Pokemons</button>
            {
                pokemons !== null ?
                <ul>
                    {pokemons.map((pokemon, index) => 
                        <li key={index}>{pokemon.name}</li>
                    )}
                </ul>
                : ''
            }
        </div>
    )
}

export default PokeForm
