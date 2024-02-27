import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import {
  Container,
  Main,
  WorkingListStyle,
  WorkingStyle,
} from '../styles/componentStyles';

const TodoMain = () => {
  const todoList = useSelector((state) => state.todo);
  return (
    <Container>
      <Main>
        <WorkingStyle>
          <WorkingListStyle>
            <TodoList todoList={todoList} />
          </WorkingListStyle>
        </WorkingStyle>
      </Main>
    </Container>
  );
};

export default TodoMain;
