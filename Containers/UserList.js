import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import { List, ListItem } from "react-native-elements";

export default class UserList extends React.Component {
  static navigationOptions = {
    drawerLabel: "Screen One",
    drawerIcon: () => (
      // <Image
      //   source={{uri: 'https://i.stack.imgur.com/xSYDb.png'}}
      //   style={{width: 30, height: 30, borderRadius: 15, backgroundColor:'red'}}
      // />
      <Image
        source={require("../images/menuic.png")}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: "red"
        }}
      />
    )
  };
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: "white",
    //title: navigation.state.params.data.name,
    title: "User List",
    headerTitleStyle: {
      color: "white"
    },
    headerStyle: {
      backgroundColor: "#428AF8"
    },
    drawerIcon: () => (
      // <Image
      //   source={{uri: 'https://i.stack.imgur.com/xSYDb.png'}}
      //   style={{width: 30, height: 30, borderRadius: 15, backgroundColor:'red'}}
      // />
      <Image
        source={require("../images/menuic.png")}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          backgroundColor: "red"
        }}
      />
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = "https://reqres.in/api/users?page=1.";
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.data : [...this.state.data, ...res.data],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderItem = ({ item }) => (
    <ListItem
      title={item.first_name}
      subtitle={item.last_name}
      leftAvatar={{
        source: item.avatar && { uri: item.avatar },
        title: item.first_name
      }}
      onPress={() => navigation.navigate("screen2")}
    />
  );
  keyExtractor = (item, index) => index.toString();

  render() {
    const { navigation } = this.props;

    return (
      <View containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={item.first_name}
              subtitle={item.last_name}
              leftAvatar={{
                source: item.avatar && { uri: item.avatar },
                title: item.first_name
              }}
              onPress={() =>
                navigation.navigate("userDetailsScreen", { data: item })
              }
            />
          )}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  flatview: {
    justifyContent: "center",
    paddingTop: 30,
    borderRadius: 2
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18
  },
  email: {
    color: "red"
  }
});
