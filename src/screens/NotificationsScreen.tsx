import * as React from 'react'
import { Text, View } from 'react-native'

export default class NotificationsScreen extends React.PureComponent {
  static path = '/notifications'
  static screenName = 'notifications'

  render() {
    return (
      <View><Text>Notifications</Text></View>
    )
  }
}
