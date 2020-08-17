import * as React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

// TODO: Types are not working with most recent version of Typescript.
// TODO: Use ES6 import if typings have been adjusted.
const { ToastContainer, toast } = require('react-toastify');

import BoardGuard from './routes/BoardGuard';
import NewBoard from './routes/NewBoard';
import LoginBoard from './routes/LoginBoard';
import PrintViewBoard from './routes/PrintViewBoard';
import Icon from './components/Icon/Icon';
import Board from './routes/Board';
import withTracker from './util/analytics';
import { ImportKeys } from './routes/ImportKeys/ImportKeys';

export interface RouterProps {
  firebase?: any;
}

const CloseButton = (props: any) => (
  <Icon
    name="close20"
    className="toast__close-button"
    onClick={props.closeToast}
  />
);

const Router = (props: RouterProps) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 1 }}>
      <HashRouter>
        <Switch>
          <Redirect exact from="/" to="/new" />
          <Route path="/new" component={withTracker(NewBoard as any)} />
          <Route
            path="/board/:id"
            render={routeProps => (
              <BoardGuard {...routeProps} component={withTracker(Board)} />
            )}
          />
          <Route path="/join/:id" component={withTracker(LoginBoard as any)} />
          <Route
            path="/print/:id"
            render={routeProps => (
              <BoardGuard
                {...routeProps}
                component={withTracker(PrintViewBoard)}
              />
            )}
          />
          <Route
            path="/transfer/:credentials"
            component={withTracker(ImportKeys as any)}
          />
        </Switch>
      </HashRouter>
      <ToastContainer
        position={toast.POSITION.BOTTOM_RIGHT}
        autoClose={5000}
        toastClassName="dark-toast"
        progressClassName="dark-toast-progress"
        closeButton={<CloseButton />}
      />
    </div>
  </div>
);

export default connect()(Router);
