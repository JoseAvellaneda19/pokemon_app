//import React from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { ReactElement } from "react";

import store from "../src/store";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = () : ReactElement => {
  return (
    <Input
      type="text"
      value={store.filter}
      onChange={(evt) => store.setFilter(evt.target.value)}
    />
  );
};

export default observer(PokemonFilter);


