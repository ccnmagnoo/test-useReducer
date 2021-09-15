import React from 'react';
import { fruits, vegetales } from './data';

interface MyStore {
  fruits: string[];
  vegetales: string[];
}

const initialData: MyStore = {
  fruits: fruits,
  vegetales: vegetales,
};

//create context
export const MyContext = React.createContext<MyStore | null>(null);

//create component provider of this context
const MyProvider: React.FC<MyStore> = (props) => {
  return <MyContext.Provider value={initialData}>{props.children}</MyContext.Provider>;
};

export default MyProvider;
