import React from 'react';
import { Archive, Main, CardForm} from './pages';
import { NotFound } from './components';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { AppRoute } from './const';

export const App = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact>
                  <Main />
              </Route>
              <Route path={AppRoute.ARCHIVE} exact component={Archive} />
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
