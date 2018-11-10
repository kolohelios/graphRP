import * as React from 'react'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import NotificationsScreen from './NotificationsScreen'
import { Route, Redirect } from 'react-router-dom'
import { View } from 'react-native';

const screens = [
  HomeScreen,
  LoginScreen,
  NotificationsScreen,
]

export default () =>
  <View>
    {
      screens.map((screen) => {
        return <Route
          key={screen.screenName}
          path={screen.path}
          component={screen}
        />
      })
    }
    <Route exact path="/" render={() => <Redirect to="/home"/>} />
  </View>
