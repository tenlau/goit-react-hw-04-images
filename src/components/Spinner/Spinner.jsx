// src/components/Spinner.jsx
import React from 'react';
import { Circles } from 'react-loader-spinner'; // You can choose a different spinner if you prefer.

function Spinner() {
  return (
    <div className="Spinner">
      <Circles
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Spinner;
