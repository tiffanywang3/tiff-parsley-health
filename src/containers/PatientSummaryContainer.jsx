import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import PatientSummary from '../components/PatientSummary';
import * as patientActions from '../redux/actions/patient-actions';

class PatientSummaryContainer extends Component {
  render() {
    const { handleNavigation, handleSubmit, patient } = this.props;

    return (
      <PatientSummary
        handleNavigation={handleNavigation}
        handleSubmit={handleSubmit}
        patient={patient}
      />
    );
  }
}

PatientSummaryContainer.propTypes = {
  handleNavigation: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, props) {
  return {
    patient: state.patient,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(patientActions, dispatch),
    handleNavigation: (patient) => {
      dispatch(patientActions.setPatient(patient));
      dispatch(push('/'));
    },
    handleSubmit: (patient) => {
      console.log('Patient Information', patient);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientSummaryContainer);
