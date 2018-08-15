import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home';
import DetailsScreen from './Detail';
const StackRoot = StackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );
  export default StackRoot;