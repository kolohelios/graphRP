import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'
import Link from '../Link'
import routerContainer, { RouterContainer } from '../../containers/routing'
import { Subscribe } from 'unstated'
import Animator from '../Animator'

export default class extends React.PureComponent {
  render() {
    return (
      <Subscribe to={[routerContainer]}>
        {({ state, closeSidebar }: RouterContainer) =>
          state.sidebarOpen ? (
            <Animator
              style={styles.container}
              visibleWhenTrue={state.sidebarOpen}
              attributePropertyWhenVisible={0}
              attributePropertyWhenNotVisible={-200}
              styleAttribute={'right'}
              noAnimateOnMount={false}
            >
              <View>
                <View>
                  <TouchableOpacity onPress={closeSidebar}>
                    <Text style={styles.closeControl}>X</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </Animator>
          ) : null
        }
      </Subscribe>
    )
  }
}
