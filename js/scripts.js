// Pokemon list with items


let pokemonList=[{name: 'Machamp',height: '1.6',types: ['Fighting']}, 
                {name: 'Magneton',height: '1',types: ['Electric','Steel']},
                {name: 'Shiftry',height: '1.3',types: ['Dark','Grass']},
                {name: 'Charizard',height: '1.7',types: ['Fire','Flying']}]

pokemonList.forEach (function(pokemon) {
    console.log (pokemon.name + 's height is ' + pokemon.height + '<br>' );
    document.write (pokemon.name + 's height is ' + pokemon.height + '<br>' );
});






