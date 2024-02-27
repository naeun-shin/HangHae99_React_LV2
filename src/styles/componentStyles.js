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

// 추가 버튼
const AddButton = styled.button`
  background-color: #017574;
  width: 150px;
  padding: 15px;
  margin: 10px;
  border-style: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-left: auto;

  &:hover {
    background-color: #015a57;
  }
`;
const WorkingStyle = styled.div`
  font-weight: bold;
  padding: 0px 10px;
  margin: 10px;
  border-radius: 10px;
`;
const WorkingListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  padding: 0px 10px;
`;
const WorkingComponentSytle = styled.div`
  margin: 5px 0px;
  padding: 10px;
  border: 4px solid #017574;
  border-radius: 5px;
  flex-basis: 200px;
  flex-grow: 0;
`;

const WorkingButton = styled.div`
  display: flex;
  padding: 0px 35px;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Detail = styled.div`
  border: 1px solid ${(props) => props.theme.color.ligtGrey};
  width: 500px;
  height: 400px;
  border-radius: 5px;
`;
const DetailHeader = styled.div`
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DetailTitle = styled.div`
  font-weight: bold;
  padding: 0px 10px;
  margin: 10px;
  font-size: 30px;
`;
const DetailContent = styled.div`
  font-weight: bold;
  padding: 0px 10px;
  margin: 10px;
`;

const DetailToListButton = styled.button`
  padding: 10px 30px;
  background-color: white;
  font-weight: bold;
  width: 120px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.ligtGrey};
`;

export {
  Container,
  Main,
  NavBar,
  AddListStyle,
  AddButton,
  WorkingStyle,
  WorkingListStyle,
  WorkingComponentSytle,
  WorkingButton,
  DetailBox,
  Detail,
  DetailHeader,
  DetailTitle,
  DetailContent,
  DetailToListButton,
};
