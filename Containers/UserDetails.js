import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../Components/Button";
export default class UserDetails extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: "white",
    //title: navigation.state.params.data.name,
    title: "User Details",
    headerTitleStyle: {
      color: "white"
    },
    headerStyle: {
      backgroundColor: "#428AF8"
    }
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Image
            source={{ uri: params.data.avatar }}
            style={{ width: 128, height: 128, margin: 10 }}
          />
          <Text style={styles.name}>
            {params.data.first_name + "  " + params.data.last_name}
          </Text>
          <Button label={"Edit User"} />
          <Button label={"Delete User"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center"
  },
  name: {
    color: "#428AF8",
    fontSize: 24,
    padding: 10,
    textAlign: "center",
    marginTop: 10
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 5
  }
});
