import React from 'react';
import styled from 'styled-components';

import {
  Onion,
  Carrot,
  Celery,
  Salt,
  Pepper,
  TomatoPaste,
  MinceBeef,
  MincePork,
  MinceVeal
} from '../atoms';
import { Cut, Fry } from '../methods';

// export const Soffrito = ({ width, height, color }) => {
//   const PreppedOnion = Fry(Cut(Onion, { width, height }), color);
//   const PreppedCarrot = Fry(Cut(Carrot, { width, height }), color);
//   const PreppedCelery = Fry(Cut(Celery, { width, height }), color);

//   return (
//     <React.Fragment>
//       <PreppedOnion />
//       <PreppedCarrot />
//       <PreppedCelery />
//     </React.Fragment>
//   );
// };

// export const Seasoning = () => (
//   <React.Fragment>
//     <Salt />
//     <Pepper />
//   </React.Fragment>
// );

// export const RichBrownedMeat = ({ meats }) => {
//   const meatAssortment = {
//     veal: MinceVeal,
//     pork: MincePork,
//     beef: MinceBeef
//   };

//   const brownedMeats = meats.map(meat => Fry(meatAssortment[meat], 'brown'));
//   const BrownedPaste = Fry(TomatoPaste, 'brown');

//   return (
//     <React.Fragment>
//       {brownedMeats.map(brownedMeat => brownedMeat)}
//       <BrownedPaste />
//     </React.Fragment>
//   );
// };
