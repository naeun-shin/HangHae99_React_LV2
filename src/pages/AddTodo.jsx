import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/modules/todos';
import { AddListStyle } from '../styles/componentStyles';
import Button from '../components/Button';

const AddList = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleTodoListAdd = () => {
    const newTodo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle('');
    setContent('');
  };

  return (
    <AddListStyle>
      <p>제목 </p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <p>내용</p>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={handleTodoListAdd} text='추가하기' />
    </AddListStyle>
  );
};

export default AddList;
