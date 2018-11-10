import * as React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from './styles'

export default class LoginScreen extends React.PureComponent {
  static path = '/login'
  static screenName = 'login'

  render() {
    return (
      <View>
        <Text>Login</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputField}
            placeholder={'Username'}
          />
          <TextInput
            style={styles.inputField}
            placeholder={'Password'}
          />
          <Button title={'Log In'} onPress={() => {}} />
        </View>
      </View>
    )
  }
}
