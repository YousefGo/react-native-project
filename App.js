import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen  from "./src/screens/ImageScreen";
import ConuterScreen from "./src/screens/CounterScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    List:ListScreen ,
    Image:ImageScreen , 
    Counter:ConuterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Test ",
    },
  }
);

export default createAppContainer(navigator);
