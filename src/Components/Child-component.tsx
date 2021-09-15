import React from 'react';
import { MyContext } from './context';

import useList from './useList';

export const Child = () => {
  //consuming data from context 🍴
  const data = React.useContext(MyContext);
  //custom hook return a <ul> list 👨‍🍳
  const [list, size] = useList(data?.fruits);
  return (
    <>
      <div className='Child-section'>
        <h4>Child component</h4>
        <p className='Data-section'>{list}</p>
        <p className='Data-section'>size: {size}</p>
      </div>
    </>
  );
};
