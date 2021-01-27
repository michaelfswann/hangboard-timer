import React from 'react';

import Input from './input';
import Button from './button';

const Component = () => {
  return (
    <div>
      <Input name="Hang for:" max="30" min="1" defaultValue="7" />
      <Input name="Rest for:" max="180" min="5" defaultValue="120" />
      <Input name="Number of sets:" max="10" min="1" defaultValue="6" />
      <br></br>
      <Button text="Start timer!" />
    </div>
  );
};

export default Component;
