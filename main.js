import React, {
  AppRegistry,
  Component,
  Navigator,
} from 'react-native';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux/native';
import { Router, Route } from 'react-native-router-flux';
import ChooseVaccine from './containers/ChooseVaccine';
import ChooseDate from './containers/ChooseDate';
import List from './containers/List';
import Detail from './containers/Detail';

const store = configureStore();

class ProviderWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        { () => (
          <Router hideNavBar name="root">
            <Route name="list" component={List} title="List"/>
            <Route
              name="chooseVaccine"
              component={ChooseVaccine}
              title="Pick a Vaccine"
              sceneConfig={Navigator.SceneConfigs.FloatFromBottom}
            />
            <Route
              name="chooseDate"
              component={ChooseDate}
              title="Pick a Date"
              sceneConfig={Navigator.SceneConfigs.FloatFromRight}
            />
            <Route
              name="detail"
              component={Detail}
              title="Detail"
              sceneConfig={Navigator.SceneConfigs.FloatFromRight}
            />
          </Router>
        )}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('main', () => ProviderWrapper);
