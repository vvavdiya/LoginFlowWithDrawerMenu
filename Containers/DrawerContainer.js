import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

export default class DrawerContainer extends React.Component {
  logout = () => {
    const actionToDispatch = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: "loginStack" })]
    });
    this.props.navigation.dispatch(actionToDispatch);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate("UserList")}
          style={styles.drawerItem}
        >
          User List
        </Text>
        <Text
          onPress={() => navigation.navigate("AddUser")}
          style={styles.drawerItem}
        >
          Add Users
        </Text>
        <Text
          onPress={() => navigation.navigate("Settings")}
          style={styles.drawerItem}
        >
          Settings
        </Text>
        <Text onPress={this.logout} style={styles.drawerItem}>
          Log Out
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  drawerItem: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#428AF8",
    padding: 15,
    margin: 5,
    borderRadius: 2,
    textAlign: "center"
  }
});
