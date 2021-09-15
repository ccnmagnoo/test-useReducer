import React from 'react';
import { Child } from './Child-component';

export const Parent = () => {
  return (
    <section className='Parent-section'>
      <h3>Parent component</h3>
      <div className='Data-section'>
        <ul>
          <li>🍎</li>
          <li>🍒</li>
          <li>🍓</li>
          <li>🥝</li>
        </ul>
      </div>
      <Child />
    </section>
  );
};
