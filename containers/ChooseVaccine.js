import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ChooseVaccine from '../components/ChooseVaccine';
import pickVaccine from '../actions/pickVaccine';
import vaccines from '../selectors/vaccines';

const actions = {
  pickVaccine,
};

const selectors = {
  vaccines,
};

export default class ChooseVaccineContainer extends Component {
  render() {
    return <ChooseVaccine {...this.props} />;
  }
}

export default connect(createStructuredSelector(selectors), actions)(ChooseVaccineContainer);
