//NOTE - false 인 경우엔 working 로딩 / true인 경우엔 done으로 로딩
import React from 'react';
import { Link } from 'react-router-dom';
import { removeTodo, isDoneTodo, cancelTodo } from '../redux/modules/todos';

import {
  WorkingComponentSytle,
  WorkingButton,
} from '../styles/componentStyles';
import { useDispatch } from 'react-redux';

const TodoList = ({ todoList }) => {
  const dispatch = useDispatch();

  // 삭제
  const handleRemoveListClick = (id) => {
    dispatch(removeTodo(id));
  };

  // 완료 이동
  const handleMoveDoneListClick = (id) => {
    dispatch(isDoneTodo({ id, isDone: true }));
  };

  // 취소
  const handleCancelDoneListClick = (id) => {
    dispatch(cancelTodo({ id, isDone: false }));
  };

  return (
    <>
      <h2>Working</h2>
      {todoList.map((item) => {
        if (!item.isDone) {
          return (
            <WorkingComponentSytle key={item.id}>
              <Link to={`/todoDetail/${item.id}`}> 상세보기 </Link>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <WorkingButton>
                <button onClick={() => handleRemoveListClick(item.id)}>
                  삭제하기
                </button>
                <button onClick={() => handleMoveDoneListClick(item.id)}>
                  완료
                </button>
              </WorkingButton>
            </WorkingComponentSytle>
          );
        }
        return null;
      })}
      <h2>Done</h2>
      {todoList.map((item) => {
        if (item.isDone) {
          return (
            <WorkingComponentSytle key={item.id}>
              <Link to={`/todoDetail/${item.id}`}> 상세보기 </Link>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <WorkingButton>
                <button onClick={() => handleRemoveListClick(item.id)}>
                  삭제하기
                </button>
                <button onClick={() => handleCancelDoneListClick(item.id)}>
                  취소
                </button>
              </WorkingButton>
            </WorkingComponentSytle>
          );
        }
        return null;
      })}
    </>
  );
};

export default TodoList;
