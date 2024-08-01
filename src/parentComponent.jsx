import React from 'react';
import ChildComponent from './ChildComponent';


function ParentComponent({ count }) {
  const doubleCount = count * 2;

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Double Count: {doubleCount}</p>
    <ChildComponent/>
    </div>
  );
}

export default ParentComponent;
