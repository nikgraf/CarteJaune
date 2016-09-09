import Exponent from 'exponent'; // eslint-disable-line no-unused-vars
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import configureStore from './store/configureStore';
import ChooseVaccine from './containers/ChooseVaccine';
import ChooseDate from './containers/ChooseDate';
import List from './containers/List';
import Detail from './containers/Detail';

const store = configureStore();

// eslint-disable-next-line react/prefer-stateless-function
class ProviderWrapper extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Provider store={store}>
        <Router hideNavBar name="root">
          <Scene
            key="list"
            component={List}
            title="List"
          />
          <Scene
            key="chooseVaccine"
            component={ChooseVaccine}
            title="Pick a Vaccine"
            sceneConfig={Navigator.SceneConfigs.FloatFromBottom}
          />
          <Scene
            key="chooseDate"
            component={ChooseDate}
            title="Pick a Date"
            sceneConfig={Navigator.SceneConfigs.FloatFromRight}
          />
          <Scene
            key="detail"
            component={Detail}
            title="Detail"
            sceneConfig={Navigator.SceneConfigs.FloatFromRight}
          />
        </Router>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('main', () => ProviderWrapper);
