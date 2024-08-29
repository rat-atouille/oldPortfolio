import React from 'react';

const Noise = () => (
  <svg>
    <filter id="grainy">
      <feTurbulence
        type="turbulence"
        baseFrequency="0.5"
        numOctaves="2"
        result="noise"
      />
    </filter>
  </svg>
);

export default Noise;
