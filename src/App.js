import React from 'react';
import { Archive, Main, CardForm} from './pages';
import { NotFound } from './components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute } from './const';

export const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path={AppRoute.ARCHIVE} element={<Archive />} />
              <Route path={AppRoute.EVENT} element={<CardForm />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
};
