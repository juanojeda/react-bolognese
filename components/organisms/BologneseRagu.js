import React from 'react';

import { Soffrito, Seasoning, RichBrownedMeat } from '../molecules';
import { Cut, Fry } from '../methods';

const MincedGarlic = ({ color }) =>
  Fry(Cut(Garlic, { width: '0.001mm', height: '0.001mm' }), color);

// export const BologneseRagu = ({ hasVeal, hasPork }) => {
//   // const meats = ['beef', hasVeal && 'veal', hasPork && hasPork].filter(
//   //   meat => !!meat
//   // );

//   return (
//     <React.Fragment>
//       <Seasoning />

//       <Basil />
//       <BayLeaf />

//       <BeefStock />

//       <Milk />

//       <RedWine />
//       <RichBrownedMeat meats={meats} />
//       <MincedGarlic color="transparent" />
//       <Soffrito width="2mm" height="2mm" color="transparent" />
//     </React.Fragment>
//   );
// };
