import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';

import CreatePatientForm from '../components/CreatePatientForm';
import * as patientActions from '../redux/actions/patient-actions';

const ReduxCreatePatientForm = reduxForm({
  enableReinitialize: true,
})(CreatePatientForm);

class CreatePatientFormContainer extends Component {
  handleSubmit(values, dispatch) {
    dispatch(patientActions.setPatient(values));
    dispatch(push('/patient-summary'));
  }

  render() {
    const { patient } = this.props;

    return (
      <ReduxCreatePatientForm
        form={'CreatePatientForm'}
        initialValues={patient}
        onSubmit={this.handleSubmit}
        patient={patient}
      />
    );
  }
}

CreatePatientFormContainer.propTypes = {
  patient: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    patient: state.patient,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(patientActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePatientFormContainer);
