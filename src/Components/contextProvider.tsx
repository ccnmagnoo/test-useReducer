import React from 'react';
import { fruits, vegetales } from './data';

const data = {
  fruits: fruits,
  vegetales: vegetales,
};

export const MyContext = React.createContext(data);

const MyProvider: React.FC<{ fruits: string[]; vegetales: string[] }> = (props) => {
  return <MyContext.Provider value={data}>{props.children}</MyContext.Provider>;
};

export default MyProvider;
