import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class AddUsers extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: "white",
    title: "Add User",
    headerTitleStyle: {
      color: "white"
    },
    headerStyle: {
      backgroundColor: "#428AF8"
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleLabel}>Add New User</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  titleLabel: {
    top: 100,
    paddingTop: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Verdana",
    marginBottom: 10,
    color: "#595856",
    // flex: 1,
    width: "90%"
  }
});
