import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import list from '../shared/list';
// import todo from '../redux/modules/todos';

const TodoDetail = () => {
  const todoList = useSelector((state) => state.todo);

  const params = useParams();
  const history = useNavigate();

  const todoId = params.id;
  const details = todoList.find((item) => item.id === todoId);

  const HandleGoBackclick = () => {
    history(`/`);
  };

  if (!details) {
    return <div>Todo가 없습니다!</div>;
  }
  return (
    <div>
      <p>ID : {todoId}</p>
      <button onClick={HandleGoBackclick}>이전으로</button>
      <h2>{details.title}</h2>
      <p>{details.content}</p>
    </div>
  );
};

export default TodoDetail;
