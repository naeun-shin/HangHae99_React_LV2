import React from 'react';
// import { AddButton } from '../styles/componentStyles';

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
