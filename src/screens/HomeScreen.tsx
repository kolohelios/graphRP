import * as React from 'react'
import { Text, View } from 'react-native'

export default class HomeScreen extends React.PureComponent {
  static path = '/home'

  render() {
    return (
      <View><Text>Home</Text></View>
    )
  }
}
