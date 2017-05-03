import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import CreatePatientFormContainer from '../../containers/CreatePatientFormContainer.jsx';
import PatientSummaryContainer from '../../containers/PatientSummaryContainer.jsx';

const Routes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={CreatePatientFormContainer} />
        <Route path="/patient-summary" component={PatientSummaryContainer} />
      </div>
    </ConnectedRouter>
  );
};

export default Routes;
