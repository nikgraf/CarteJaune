import React, { Component } from 'react-native';
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

export default class ChooseDateContainer extends Component {
  render() {
    return <ChooseDate {...this.props} />;
  }
}

export default connect(createStructuredSelector(selectors), actions)(ChooseDateContainer);
