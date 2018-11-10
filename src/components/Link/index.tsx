import * as React from 'react'
import { history } from '../../lib/Router'
import { Link as ProvidedLink } from 'react-router-dom'
import { TouchableOpacity, Platform, Text, ViewStyle } from 'react-native'
import styles from './styles'

interface IProps {
  children: string
  style: ViewStyle
  to: string
}

const Link = (props: any) => {
  const followLink = () => {
    history.push(props.to)
  }

  if (Platform.OS === 'web') {
    return <ProvidedLink {...props}>
        <Text style={[ styles.text, props.style]}>{props.children}</Text>
      </ProvidedLink>
  } else {
    return <TouchableOpacity onPress={followLink}>
      <Text style={[styles.text, props.style]}>{props.children}</Text>
    </TouchableOpacity>
  }
}

export default Link
