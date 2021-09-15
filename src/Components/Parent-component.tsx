import React from 'react';
import { Child } from './Child-component';
import { MyContext } from './context';
import useList from './useList';

export const Parent = () => {
  //data context consumption
  const context = React.useContext(MyContext);
  //custom hook 👨‍🍳
  const [list, size] = useList(context?.fruits);

  return (
    <section className='Parent-section'>
      <h3>Parent component</h3>
      <div>
        <button onClick={context.increaseBanana}>Banana</button>
        <button onClick={context.increaseMelon}>Watermelon</button>
        <button onClick={context.decrease}>Decrease</button>
      </div>
      <div className='Data-section'>{list}</div>
      <div className='Data-section'>size: {size}</div>
      <Child />
    </section>
  );
};
