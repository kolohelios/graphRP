import * as React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ModalCover from './components/ModalCover'
import Modal from './components/Modal'
import Screens from './screens'

export default () =>
  <SafeAreaView style={styles.container}>
    <View>
      <Header />
      <Sidebar />
      <Screens />
    </View>
    <ModalCover />
    <Modal />
</SafeAreaView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})
