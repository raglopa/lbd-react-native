import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DrawerIcon from './DrawerIcon'

export default class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'About',
      drawerIcon: <DrawerIcon image={'user'} />
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>
      </View>
    )
  }
}
