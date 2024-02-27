import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TodoMain = () => {
  const todoList = useSelector((state) => state.todo);

  return (
    <div className='Container'>
      <div className='Main'>
        {todoList.map((item) => {
          return (
            <div key={item.id}>
              <div>제목 : {item.title}</div>
              <div>내용 : {item.content}</div>
              <Link to={`/${item.id}`}>상세보기</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoMain;
