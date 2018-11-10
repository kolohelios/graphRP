import * as React from 'react'
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import Router from './lib/Router'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import { Provider } from 'unstated'


type Props = {};
export default class App extends React.Component<Props> {
  render() {
    return (
      <Provider>
        <Router>
          <SafeAreaView style={styles.container}>
            <View>
              <Header />
              <Sidebar />
              <Route path="/home" component={HomeScreen} />
              <Route path="/login" component={LoginScreen} />
            </View>
            {/* <ModalCover />
            <Modal /> */}
          </SafeAreaView>
        </Router>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})
