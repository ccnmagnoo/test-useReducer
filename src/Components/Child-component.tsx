import React from 'react';
import { MyContext } from './contextProvider';

import useList from './useList';

export const Child = () => {
  //consumind data from context
  const data = React.useContext(MyContext);
  //custom hook 👨‍🍳
  const [list, size] = useList(data?.fruits);
  return (
    <>
      <div className='Child-section'>
        <h4>Child component</h4>
        <div className='Data-section'>{list}</div>
        <div className='Data-section'>size: {size}</div>
      </div>
    </>
  );
};
