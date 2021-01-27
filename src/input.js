import React from 'react';

const Input = ({ defaultValue, name, max, min }) => {
  return (
    <div>
      <p>{name}</p>
      <input
        type="number"
        defaultValue={defaultValue}
        name={name}
        max={max}
        min={min}
      ></input>
    </div>
  );
};

export default Input;
