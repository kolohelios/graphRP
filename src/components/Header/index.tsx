import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import Link from '../Link'
import { Subscribe } from 'unstated'
import routerContainer, { RouterContainer } from '../../containers/routing'

export default class extends React.PureComponent {
  render() {
    return (
      <Subscribe to={[routerContainer]}>
        {({ openSidebar }: RouterContainer) =>
          <View style={styles.container}>
            <View style={styles.left}>
              <Text style={styles.text}>graphRP</Text>
            </View>
            <View style={styles.right}>
              <Link to={'/home'}>Home</Link>
              <Link to={'/login'}>Login</Link>
            </View>
            <TouchableOpacity onPress={openSidebar}>
              <Text>
                Open Sidebar
              </Text>
            </TouchableOpacity>
          </View>
        }
      </Subscribe>
    )
  }
}
