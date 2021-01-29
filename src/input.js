import React from 'react';

const Input = ({ defaultValue, name, max, min, onChange }) => {
  return (
    <div>
      <p>{name}</p>
      <input
        type="number"
        defaultValue={defaultValue}
        name={name}
        max={max}
        min={min}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
