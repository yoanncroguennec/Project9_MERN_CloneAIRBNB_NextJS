import React, { useState } from 'react'
import { Range, getTrackBackground } from "react-range";
const MIN = 0;
const MAX = 200;

////////////////////// EXPORT FUNCTION REACT //////////////////////
export default function PriceRange({ setFetchRangeValues }) {

    const [rangeValues, setRangeValues] = useState([0, 200]);

    return (
      <Range
        min={MIN}
        max={MAX}
        values={rangeValues}
        onChange={(values) => setRangeValues(values)}
        onFinalChange={(values) => {
          setFetchRangeValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              // Style Bar Range Price
              background: "#2cb1ba",
              height: "4px",
              width: "200px",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              // Style of the two rouds of the Bar Range Price
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              backgroundColor: "green",
            }}
          >
            <div
              style={{
                // Style of the two indicators of selected values
                border: "2px solid green",
                borderRadius: "50%",
                fontSize: "0.7em",
                fontWeight: "700",
                padding: "5px",
                color: "red",
                position: "absolute",
                top: "-28px",
              }}
            >
              {rangeValues[index]}€
            </div>
          </div>
        )}
      />
    );
}
