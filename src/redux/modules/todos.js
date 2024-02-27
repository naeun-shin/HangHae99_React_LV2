import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: '리액트 배우기',
    content: '리액트 배우기',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: 'Next.js 배우기',
    content: 'Next.js 배우기',
    isDone: true,
  },
];

// action value
const ADD_TODO = 'todo/ADD_TODO';
// const IS_DONE = 'todo/IS_DONE';
// const IS_TODO = 'todo/IS_TODO';

// action creater
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
// export const isDone = (todo) => {
//   return {
//     type: IS_DONE,
//     payload : todo
//   };
// };
// export const isTodo = () => {
//   return {
//     type: IS_TODO,
//   };
// };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default todoReducer;
