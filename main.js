import React, {
  AppRegistry,
  Component,
} from 'react-native';
import {
  fromJS
} from 'immutable';

import Add from './components/Add';
import List from './components/List';
import { ADD_VIEW, LIST_VIEW } from './constants/views';

const yourVaccines = fromJS({});

class App extends Component {

  state = {
    currentView: LIST_VIEW,
    yourVaccines,
  };

  _onAdd(id, vaccine) {
    const vaccines = this.state.yourVaccines.set(id, vaccine);
    this.setState({
      currentView: LIST_VIEW,
      yourVaccines: vaccines,
    });
  }

  _onPressAdd() {
    this.setState({
      currentView: ADD_VIEW,
    });
  }

  render() {
    if (this.state.currentView === ADD_VIEW) {
      return <Add onAdd={ this._onAdd.bind(this) } />;
    }

    return (
      <List
        onPressToAdd={ this._onPressAdd.bind(this) }
        vaccines={this.state.yourVaccines}
      />
    );
  }
}

AppRegistry.registerComponent('main', () => App);
