import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Container, Main } from '../styles/componentStyles';

import TodoMain from '../pages/TodoMain';
import TodoDetail from '../pages/TodoDetail';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Main>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TodoMain />} />
              <Route path='todoDetail/:id' element={<TodoDetail />} />
            </Routes>
          </BrowserRouter>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default Router;
