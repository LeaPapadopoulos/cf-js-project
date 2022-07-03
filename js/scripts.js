let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur", height: 7, types: ["grass", "poison"] },
    { name: "Butterfree", height: 3, types: ["bug", "flying"] },
    { name: "Pikachu", height: 1, types: ["electric", "ice"] },

    //   { name: "Pikachu2", height: 22, types: ["electric", "ice"] },
  ];
  function add(pokemon) {
    pokemonList.push(pokemon);
    return pokemonList;
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();
let newPokemon = { name: "Pikachu2", height: 22, types: ["electric", "ice"] };
console.log(pokemonRepository.getAll());
// for loop to add pockemon names in the grids
// determine which pokemon is big

// for (let i = 0; i < pokemonList.length; i++) {
//   let pokemonDisplay = document.querySelector(`#pokemon-${i}`);
//   pokemonDisplay.innerHTML = pokemonList[i].name;
//   if (pokemonList[i].height < 10 && pokemonList[i].height >= 7) {
//     pokemonDisplay.innerHTML = pokemonList[i].name + " Wow, that’s big!";
//   } else {
//     pokemonDisplay.innerHTML = pokemonList[i].name;
//   }
// }

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function (user, i = 0) {
  let pokemonDisplay = document.querySelector(`#pokemon-${i}`);
  pokemonDisplay.innerHTML = pokemonList.name;
  if (user.height < 10 && user.height >= 7) {
    pokemonDisplay.innerHTML = user.name + " Wow, that’s big!";
  } else {
    pokemonDisplay.innerHTML = user.name;
  }
  i++;
});

// {
//   if (pokemonList[i].height < 10 && pokemonList[i].height >= 7) {
//     console.log(pokemonList[i].name + " is a big pokemon");
//   } else if (pokemonList[i].height > 1 && pokemonList[i].height < 7) {
//     console.log(pokemonList[i].name + " is a small pokemon");
//   } else {
//     console.log(pokemonList[i].name + " is a pokemon");
//   }
// }
