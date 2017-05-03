import {css, StyleSheet } from 'aphrodite';
import React, { PropTypes, Component } from 'react';

const sx = StyleSheet.create({
  button:{
    color: '#43BEAC',
    border: 'none',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    textAlign: 'start',
  },
  p: {
    color: 'gray',
    marginTop: '0',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#43BEAC',
    marginBottom: '5px',
  },
});

export default class PatientDetails extends Component {
  render() {
    const { patient } = this.props;
    return (
      <div>
        <h2 className={css(sx.title)}>Patient Details</h2>
        <div className={css(sx.column)}>
          <p>NAME: {patient.firstName} {patient.lastName}</p>
          <p>GENDER: {patient.gender}</p>
          <p>EMAIL: {patient.email}</p>
          <p>ADDRESS: {patient.address.street1} {patient.address.street2}, {patient.address.city}, {patient.address.state}, {patient.address.postalCode}</p>
        </div>

        <h2 className={css(sx.title)}>Medical History</h2>
        <div className={css(sx.column)}>
          <p>MEDICAL CONDITIONS: {patient.medicalHistory.medicalHistory}</p>
          <p>FAMILY HISTORY: {patient.medicalHistory.familyHistory}</p>
          <p>MEDICATIONS: {patient.medicalHistory.medications}</p>
          <p>DISEASES: {patient.medicalHistory.diseases}</p>
          <p>ALLERGIES: {patient.medicalHistory.allergies}</p>
        </div>

        <h2 className={css(sx.title)}>Contract Consent</h2>
        <div className={css(sx.column)}>
          {patient.contract ? <p>Consented to terms</p>: <p>Did not consent to terms</p>}
        </div>
      </div>
    )
  }
}

PatientDetails.propTypes = {
  patient: PropTypes.object.isRequired,
};
