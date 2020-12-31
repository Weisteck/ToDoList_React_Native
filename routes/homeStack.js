import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Detail from '../screens/details';

const screens = {
    Home: {
        screen: Home
    },
    Detail: {
        screen: Detail
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);