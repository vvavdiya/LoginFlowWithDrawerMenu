import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import AppNavigation from './Navigation/AppNavigation'

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle='light-content' />
          <AppNavigation />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})
