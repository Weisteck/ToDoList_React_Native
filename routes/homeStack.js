import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Detail from '../screens/details';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'To Do List App'
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'Détail de la tâche'
        }
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);