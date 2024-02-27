import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Container, Main } from '../styles/componentStyles';

import Header from '../pages/Header';
import AddList from '../pages/AddTodo';
import TodoMain from '../pages/TodoMain';
import TodoDetail from '../pages/TodoDetail';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Main>
          <BrowserRouter>
            <Header />
            <AddList />
            <Routes>
              <Route path='/' element={<TodoMain />} />
              <Route path='/:id' element={<TodoDetail />} />
            </Routes>
          </BrowserRouter>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default Router;
