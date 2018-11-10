import * as React from 'react'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import { Route } from 'react-router-dom'
import { View } from 'react-native';

const screens = [
  HomeScreen,
  LoginScreen,
]

export default () =>
  <View>
    {
      screens.map((screen) => {
        return <Route path={screen.path} component={screen} />
      })
    }
  </View>
