import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ChooseDate from '../components/ChooseDate';
import addVaccination from '../actions/addVaccination';
import addForm from '../selectors/addForm';

const actions = {
  addVaccination,
};

const selectors = {
  addForm,
};

class ChooseDateContainer extends Component {
  render() {
    return <ChooseDate {...this.props} />;
  }
}

export default connect(createStructuredSelector(selectors), actions)(ChooseDateContainer);
