import React from 'react';
import { fruits } from './data';
import useList from './useList';

export const Child = () => {
  const list = useList(fruits);
  return (
    <>
      <div className='Child-section'>
        <h4>Child component</h4>
        <div className='Data-section'>{list}</div>
      </div>
    </>
  );
};
