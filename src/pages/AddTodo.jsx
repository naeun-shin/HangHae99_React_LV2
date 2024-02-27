import React from 'react';
import { AddListStyle } from '../styles/componentStyles';

// 버튼 컴포넌트 호출 필요
// 추가 이벤트 핸들러 호출 필요
const AddList = () => {
  return (
    <AddListStyle>
      <p>제목 </p>
      <input />
      <p>내용</p>
      <input />
      <button>추가하기</button>
    </AddListStyle>
  );
};

export default AddList;
