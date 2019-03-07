import Favorite from './scenes/Favorite/index';
import App from './scenes/Home/App';
import History from './scenes/History/index';
import Detail from './scenes/Detail/index';

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const Tabs = createBottomTabNavigator({
  Home: App,
  Like: Favorite,
  History: History
});


const StackNavigator = createStackNavigator(
  {
    Home: Tabs,
    Detail: Detail,
  }, {
    mode: 'modal',
    headerMode: 'none'
  }
)
  
export default { StackNavigator };