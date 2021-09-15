import { fruits, vegetales } from './data';

//config store
export interface MyState {
  fruits: string[];
  vegetales: string[];
  increaseBanana: () => void;
  increaseMelon: () => void;
  decrease: () => void;
}

//start state
export const initialState: MyState = {
  fruits: fruits,
  vegetales: vegetales,
  increaseBanana: () => {},
  increaseMelon: () => {},
  decrease: () => {},
};

//type actions
enum ActionType {
  IncreaseFruit = 'MORE_FRUITS',
  DecreaseFruit = 'LESS_FRUITS',
}

//Action type: it always has to have this structure type and payload
export type MyActions = {
  type: ActionType;
  payload: string;
};

//Action functions
export const addBanana: MyActions = {
  type: ActionType.IncreaseFruit,
  payload: '🍌',
};
export const addWatermelon: MyActions = {
  type: ActionType.IncreaseFruit,
  payload: '🍉',
};
export const removeLastFruit: MyActions = {
  type: ActionType.DecreaseFruit,
  payload: '',
};

//fruit reducer
export const fruitReducer: React.Reducer<MyState, MyActions> = (
  state: MyState,
  action: MyActions
) => {
  //deconstruct action
  const { type, payload } = action;

  //state on return depending of type Action
  switch (type) {
    case ActionType.IncreaseFruit: {
      //increase with bananas
      const newFruits = [...state.fruits, payload];
      return { ...state, fruits: newFruits };
    }
    case ActionType.DecreaseFruit: {
      //decrease fruits from last one
      state.fruits.pop();
      return { ...state, fruits: state.fruits };
    }
    default:
      return state;
  }
};
