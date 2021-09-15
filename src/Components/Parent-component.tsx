import React from 'react';
import { Child } from './Child-component';
import { MyContext } from './contextProvider';
import useList from './useList';

export const Parent = () => {
  //data context consumption
  const data = React.useContext(MyContext);
  //custom hook 👨‍🍳
  const [list, size] = useList(data?.vegetales);

  return (
    <section className='Parent-section'>
      <h3>Parent component</h3>
      <div className='Data-section'>{list}</div>
      <div className='Data-section'>size: {size}</div>
      <Child />
    </section>
  );
};
