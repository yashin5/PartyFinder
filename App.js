import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './src/screens/Home'
import Login from './src/screens/Login'

const App = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
}, {
  initialRouteName: 'Login'
});

export default createAppContainer(App)