// import React, { useState } from "react";
// import ReactSlider from "react-slider";

// export default function PriceRange({ value, setValue }) {
//   //   const [value, setValue] = useState([]);
//   return (
//     <div>
//       <ReactSlider
//         className='horizontal-slider'
//         thumbClassName='example-thumb'
//         trackClassName='example-track'
//         defaultValue={[0, 100]}
//         min={0}
//         max={100}
//         ariaLabel={["Lower thumb", "Upper thumb"]}
//         ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
//         renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
//         pearling
//         minDistance={10}
//         onChange={(value, index) => setValue(value)}
//       />
//       Prix Min : {value[0]}
//       Prix Max : {value[1]}
//     </div>
//   );
// }
