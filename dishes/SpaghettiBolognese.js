import React from 'react';
import styled from 'styled-components';

import {
  Spaghetti,
  BayLeaf,
  Pepper,
  Salt,
  BeefStock,
  TomatoPaste,
  RedWine,
  Onion,
  Carrot,
  Celery,
  Garlic,
  Basil,
  MinceBeef,
  MincePork,
  MinceVeal,
  Milk,
  Bowl
} from '../components/atoms';

const BrownedDicedOnion = styled(Onion)`
  color: transparent;
  height: 2mm;
  width: 2mm;
`;
const BrownedDicedCarrot = styled(Carrot)`
  color: transparent;
  height: 2mm;
  width: 2mm;
`;

const BrownedDicedCelery = styled(Celery)`
  color: transparent;
  height: 2mm;
  width: 2mm;
`;

const MincedGarlic = styled(Garlic)`
  color: transparent;
  height: 0.001mm;
  width: 0.001mm;
`;

const BrownedMinceBeef = styled(MinceBeef)`
  color: brown;
`;
const BrownedMincePork = styled(MincePork)`
  color: brown;
`;
const BrownedMinceVeal = styled(MinceVeal)`
  color: brown;
`;

const BrownedTomatoPaste = styled(TomatoPaste)`
  color: brown;
`;

const BologneseSauce = () => (
  <React.Fragment>
    <Salt />
    <Pepper />

    <Basil />

    <BeefStock />
    <BayLeaf />

    <Milk />

    <RedWine />

    <BrownedTomatoPaste />

    <BrownedMinceBeef />
    <BrownedMincePork />
    <BrownedMinceVeal />

    <MincedGarlic />

    <BrownedDicedCelery />
    <BrownedDicedCarrot />
    <BrownedDicedOnion />
  </React.Fragment>
);

export const SpaghettiBolognese = () => (
  <Bowl>
    <BologneseSauce />
    <Spaghetti />
  </Bowl>
);
