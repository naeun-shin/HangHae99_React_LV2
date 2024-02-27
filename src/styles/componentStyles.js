import styled from 'styled-components';

// 전체 컨테이너 스타일
const Container = styled.div`
  display: grid;
  place-items: center;
`;

//
const Main = styled.div`
  width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
`;

// NavBar
const NavBar = styled.div`
  border: 1px solid ${(props) => props.theme.color.ligtGrey};
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// AddList 스타일
const AddListStyle = styled.div`
  padding: 20px 20px;
  height: 80px;
  background-color: #ebebeb;
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;

  /* Styles for input elements */
  & > input {
    width: 200px;
    margin: 10px;
    border-radius: 5px;
    padding: 10px;
    border-style: none;
  }

  & > input:focus {
    outline: none;
  }
`;

export { Container, Main, NavBar, AddListStyle };
