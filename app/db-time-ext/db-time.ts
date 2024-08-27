// Simulate a db call

export async function getDBTime() {
    const pokemonRes = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemon = await pokemonRes.json();

    return {
        time: new Date().toLocaleTimeString(),
        pokemon: pokemon.name,
    };
}
