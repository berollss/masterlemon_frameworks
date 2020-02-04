import * as React from 'react';
import { MembersView } from './app/scenes';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { MemberDetailsView } from './app/scenes/member-details.view';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={MembersView} />
          <Route path="/details/:memberLogin" component={MemberDetailsView} />
        </Switch>
      </HashRouter>
    </>
  );
};
