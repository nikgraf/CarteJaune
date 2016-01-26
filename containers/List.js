import React, { Component } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import List from '../components/List';
import switchToChooseVaccineRoute from '../actions/switchToChooseVaccineRoute';
import vaccinations from '../selectors/vaccinations';
import vaccines from '../selectors/vaccines';

const actions = {
  switchToChooseVaccineRoute,
};

const selectors = {
  vaccinations,
  vaccines,
};

export default class ListContainer extends Component {
  render() {
    return <List {...this.props} />;
  }
}

export default connect(createStructuredSelector(selectors), actions)(ListContainer);
