import { makeAutoObservable } from "mobx";

type PokemonName = {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

type PokemonBase = {
  HP: number;
  Attack: number;
  Defense: number;
  Sp_Attack: number;
  Sp_Defense: number;
  Speed: number;
}

export type Pokemon = {
  id: number;
  name: PokemonName;
  type: string[];
  base: PokemonBase;
}

class Store {
  pokemon: Pokemon[] = [];
  filter:string = "";
  selectedPokemon: Pokemon | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPokemon(pokemon: Pokemon[]) {
    this.pokemon = pokemon;
  }
  setFilter(filter: string) {
    this.filter = filter;
  }
  setSelectedPokemon(selectedPokemon: Pokemon) {
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