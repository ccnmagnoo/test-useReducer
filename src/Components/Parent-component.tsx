import React from 'react';
import { Child } from './Child-component';
import { vegetales } from './data';
import useList from './useList';

export const Parent = () => {
  //personliced hook returing  <ul> list
  const list = useList(vegetales);

  return (
    <section className='Parent-section'>
      <h3>Parent component</h3>
      <div className='Data-section'>{list}</div>
      <Child />
    </section>
  );
};
