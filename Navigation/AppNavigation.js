import React from "react";
import { Text, Animated, Easing } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import LoginScreen from "../Containers/LoginScreen";
import UserList from "../Containers/UserList";
import UserDetails from "../Containers/UserDetails";
import Settings from "../Containers/Settings";
import DrawerContainer from "../Containers/DrawerContainer";
import AddUser from "../Containers/AddUser";

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});
// Drawer Menu
const drawerButton = navigation => (
  <Text
    style={{ padding: 5, color: "black", fontSize: 20, fontWeight: "normal" }}
    onPress={() => {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }}
  >
    Menu
  </Text>
);

// User List an Details screen stack navigator
const masterDetailStack = createStackNavigator(
  {
    userListScreen: { screen: UserList },
    userDetailsScreen: { screen: UserDetails }
  },
  {
    headerMode: "float"
  }
);

// Drawer Navigator for User list, User details and Settings
const DrawerStack = createDrawerNavigator(
  {
    UserList: {
      screen: masterDetailStack,
      navigationOptions: {
        header: null
      }
    },
    AddUser: { screen: AddUser },
    Settings: { screen: Settings }
  },
  {
    gesturesEnabled: true,
    contentComponent: DrawerContainer,
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#428AF8" },
      title: "",
      headerTintColor: "white",
      gesturesEnabled: false,
      headerLeft: drawerButton(navigation)
    })
  }
);

const MainNavigation = createStackNavigator(
  {
    loginStack: { screen: LoginScreen },
    drawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "float",
    title: "Main",
    initialRouteName: "loginStack",
    transitionConfig: noTransitionConfig
  }
);
const App = createAppContainer(MainNavigation);
export default App;
