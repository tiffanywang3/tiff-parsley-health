import { css, StyleSheet } from 'aphrodite';
import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

const sx = StyleSheet.create({
  button:{
    border: 'none',
    color: '#43BEAC',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    textAlign: 'start',
  },
  form: {
    color: 'gray',
    display: 'flex',
    flexDirection: 'column',
  },
  labelTitle: {
    color: '#43BEAC',
    marginBottom: '5px',
  },
  p: {
    color: 'gray',
    marginTop: '0',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  scrollable: {
    height: '50px',
    marginBottom: '20px',
    overflow: 'auto',
  }
});

const CreatePatientForm = ({ handleSubmit, patient }) => {
  return (
    <form className={css(sx.form)} onSubmit={handleSubmit}>
      <label className={css(sx.labelTitle)}>Patient Details</label>
      <div className={css(sx.column)}>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" required/>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text"/>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="gender">Gender</label>
        <Field name="gender" component="select">
          <option></option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </Field>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email"/>
      </div>
      <label className={css(sx.labelTitle)} htmlFor="address">Address</label>
      <div className={css(sx.column)}>
        <label htmlFor="street1">Street 1</label>
        <Field name="address.street1" component="input" type="text"/>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="street2">Street 2</label>
        <Field name="address.street2" component="input" type="text"/>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="city">City</label>
        <Field name="address.city" component="input" type="text"/>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="state">State</label>
        <Field name="address.state" component="input" type="text"/>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="postalCode">Zipcode</label>
        <Field name="address.postalCode" component="input" type="number"/>
      </div>

      <label className={css(sx.labelTitle)} htmlFor="medicalHistory">Medical History</label>
      <div className={css(sx.column)}>
        <label htmlFor="medicalHistory">Medical Conditions</label>
        <Field name="medicalHistory.medicalHistory" component="input" type="text"/>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="familyHistory">Family History</label>
        <Field name="medicalHistory.familyHistory" component="input" type="text"/>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="medications">Medications</label>
        <Field name="medicalHistory.medications" component="input" type="text" />
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="diseases">Diseases</label>
        <Field name="medicalHistory.diseases" component="input" type="text"/>
      </div>
      <div className={css(sx.column)}>
        <label htmlFor="allergies">Allergies</label>
        <Field name="medicalHistory.allergies" component="input" type="text"/>
      </div>

      <label className={css(sx.labelTitle)} htmlFor="contract">Contract</label>
      <div className={css(sx.scrollable)}>
        Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
        Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
      </div>
      <div className={css(sx.row)}>
        <Field name="contract" component="input" type="checkbox"/>
        <p className={css(sx.p)}>I accept the terms of the contract</p>
      </div>
      <button type="submit">Create Patient</button>
    </form>
  );
}

CreatePatientForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  patient: PropTypes.object,
};

export default CreatePatientForm;
