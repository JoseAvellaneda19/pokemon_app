import { makeAutoObservable } from "mobx";

class Store {
  pokemon = [];
  filter:string = "";
  selectedPokemon = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPokemon({pokemon} : {pokemon: string | null}) {
    this.pokemon = pokemon;
  }
  setFilter({filter}: {filter:string }): void {
    this.filter = filter;
  }
  setSelectedPokemon({selectedPokemon} : {selectedPokemon: any}) {
    this.selectedPokemon = selectedPokemon;
  }
}

const store = new Store();

if (typeof window !== "undefined") {
  fetch("/pokemon.json")
    .then((resp) => resp.json())
    .then((pokemon) => store.setPokemon(pokemon));
}

export default store;