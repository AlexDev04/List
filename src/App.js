import React from 'react';
import { Archive, Main, CardForm} from './pages';
import { NotFound } from './components';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AppRoute } from './const';

export const App = ({events}) => {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <Main events={events} />
              </Route>
              <Route path={AppRoute.ARCHIVE}>
                  <Archive events={events} />
              </Route>
              <Route path={AppRoute.EVENT}>
                  <CardForm />
              </Route>
              <Route>
                  <NotFound />
              </Route>
          </Switch>
      </BrowserRouter>
  )
}
