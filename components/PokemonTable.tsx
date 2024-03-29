//import React from "react";
import { observer } from "mobx-react";

import PokemonRow from "./PokemonRow";
import store from "../src/store";

function PokemonTable() {
  return (
    <table width="100%">
      <tbody>
        {store.pokemon && store.pokemon
          .filter(({ name: { english } }) =>
            english
              .toLocaleLowerCase()
              .includes(store.filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon['id']}
              pokemon={pokemon}
              onClick={(poke) => store.setSelectedPokemon(poke)}
            />
          ))}
      </tbody>
    </table>
  );
}

export default observer(PokemonTable);