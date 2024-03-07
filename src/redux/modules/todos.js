// import { v4 as uuidv4 } from 'uuid';

// const initialState = [
//   {
//     id: uuidv4(),
//     title: '리액트 배우기',
//     content: '리액트 배우기',
//     isDone: false,
//   },
//   {
//     id: uuidv4(),
//     title: 'Next.js 배우기',
//     content: 'Next.js 배우기',
//     isDone: true,
//   },
// ];

// // action value
// const ADD_TODO = 'todo/ADD_TODO';
// const ISDONE_TODO = 'todo/ISDONE_TODO';
// const CANCEL_TODO = 'todo/CANCEL_TODO';
// const REMOVE_TODO = 'todo/ROMOVE_TODO';

// // action creater
// export const addTodo = (todo) => ({
//   type: ADD_TODO,
//   payload: todo,
// });

// export const isDoneTodo = (todo) => ({
//   type: ISDONE_TODO,
//   payload: todo,
// });
// export const cancelTodo = (todo) => ({
//   type: CANCEL_TODO,
//   payload: todo,
// });
// export const removeTodo = (todo) => ({
//   type: REMOVE_TODO,
//   payload: todo,
// });

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     case ISDONE_TODO:
//     case CANCEL_TODO:
//       return state.map((todo) =>
//         todo.id === action.payload.id
//           ? { ...todo, isDone: action.payload.isDone }
//           : todo
//       );
//     case REMOVE_TODO:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };
// export default todoReducer;
