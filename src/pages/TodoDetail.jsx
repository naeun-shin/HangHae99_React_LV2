import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  DetailBox,
  Detail,
  DetailToListButton,
  DetailHeader,
  DetailTitle,
  DetailContent,
} from '../styles/componentStyles';

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
    <>
      <DetailBox>
        <Detail>
          <DetailHeader>
            <p>ID : {todoId}</p>
            <DetailToListButton onClick={HandleGoBackclick}>
              이전으로
            </DetailToListButton>
          </DetailHeader>
          <DetailTitle>{details.title}</DetailTitle>
          <DetailContent>{details.content}</DetailContent>
        </Detail>
      </DetailBox>
    </>
  );
};

export default TodoDetail;
