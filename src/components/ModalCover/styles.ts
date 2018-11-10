import { Platform, StyleSheet } from 'react-native'

const isWeb = Platform.OS === 'web'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    height: isWeb ? '100vh' : '100%',
    width: isWeb ? '100vw' : '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(125, 125, 125, 0.65)',
    zIndex: 1,
  }
})
