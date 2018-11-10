import * as React from 'react'
import { View } from 'react-native'
import styles from './styles'
import routerContainer, { RouterContainer } from '../../containers/routing'
import { Subscribe } from 'unstated'

export default () => (
  <Subscribe to={[routerContainer]}>
    {({ state }: RouterContainer) => (
      state.showModal ? (
        <View style={styles.container} />
      ) : null
    )}
  </Subscribe>
)
