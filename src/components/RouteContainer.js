import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Container from './Container';
import Photo from './Photo';

//The main task was to build the application, with two screens (home, photo)
const AppNavigator = createSwitchNavigator({
  home: Container,
  photo: Photo,
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
