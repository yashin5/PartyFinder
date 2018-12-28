import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Friends from './src/screens/Friends'

const App = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
  Friends: {screen: Friends}
}, {
  initialRouteName: 'Friends'
});

export default createAppContainer(App)