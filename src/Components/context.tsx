import React from 'react';
import {
  decreaseFruit,
  fruitReducer,
  initialState,
  inscreaseFruit,
  MyState,
} from './reducer';

//create context
export const MyContext = React.createContext(initialState);

//create component provider of this context
const MyProvider: React.FC = (props) => {
  //importing useReducer
  const [state, dispatch] = React.useReducer(fruitReducer, initialState);

  const init: MyState = {
    ...state,
    increase: () => dispatch(inscreaseFruit),
    decrease: () => dispatch(decreaseFruit),
  };
  //component provider
  return <MyContext.Provider value={init}>{props.children}</MyContext.Provider>;
};

export default MyProvider;

//res: https://github.dev/StevenCreates/react-typescript-usecontext-usereducer/blob/main/src/utils/AppState.tsx
//res: https://www.freecodecamp.org/news/react-typescript-how-to-set-up-types-on-hooks/
