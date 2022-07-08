let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Bulbasaur", height: 7, types: ["grass", "poison"] },
    { name: "Butterfree", height: 3, types: ["bug", "flying"] },
    { name: "Pikachu", height: 1, types: ["electric", "ice"] },

    //   { name: "Pikachu2", height: 22, types: ["electric", "ice"] },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  // let newPokemon = { name: "Pikachu2", height: 22, types: ["electric", "ice"] };
  // console.log(pokemonRepository.getAll());

  function addListItem(pokemon) {
    let ulPokemon = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn");
    button.classList.add("btn-info");
    listPokemon.classList.add("list-group-item");
    listPokemon.appendChild(button);
    ulPokemon.appendChild(listPokemon);
    button.addEventListener("click", function () {
      //   console.log(pokemon);
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

// pokemonList.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

// console.log(pokemonList.getAll());
