import * as React from 'react'
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import Router from './lib/Router'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Screens from './screens'
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
              <Screens />
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
