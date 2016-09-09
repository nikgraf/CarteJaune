import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import List from '../components/List';
import switchToChooseVaccineRoute from '../actions/switchToChooseVaccineRoute';
import switchToDetailRoute from '../actions/switchToDetailRoute';
import vaccinations from '../selectors/vaccinations';
import vaccines from '../selectors/vaccines';

const actions = {
  switchToChooseVaccineRoute,
  switchToDetailRoute,
};

const selectors = {
  vaccinations,
  vaccines,
};

// eslint-disable-next-line react/prefer-stateless-function
class ListContainer extends Component {
  render() {
    return <List {...this.props} />;
  }
}

export default connect(createStructuredSelector(selectors), actions)(ListContainer);
