//import React from "react";
import { observer } from "mobx-react";

import store from "../src/store";
/*
Object.keys(store.selectedPokemon.base).forEach((id: number) => (
            <tr key={store.selectedPokemon.id}>
              <td>{id}</td>
              <td>{store.selectedPokemon.base[id]}</td>
            </tr>
          ))*/

const PokemonInfo = () => {

  return store.selectedPokemon ? (
    <div>
      <h2>{store.selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          <tr>
            <td>HP</td>
            <td>{store.selectedPokemon.base.HP}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{store.selectedPokemon.base.Attack}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{store.selectedPokemon.base.Defense}</td>
          </tr>
          <tr>
            <td>Sp_Attack</td>
            <td>{store.selectedPokemon.base.Sp_Attack}</td>
          </tr>
          <tr>
            <td>Sp_Defense</td>
            <td>{store.selectedPokemon.base.Sp_Defense}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{store.selectedPokemon.base.Speed}</td>
          </tr>
  
        </tbody>
      </table>
    </div>
  ) : null
};

export default observer(PokemonInfo);

