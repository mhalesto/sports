import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import PlayerDetails from "./src/components/PlayerDetails";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  PlayerDetails: PlayerDetails,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Sports'
  }
});

export default createAppContainer(navigator);