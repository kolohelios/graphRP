import { Platform, StyleSheet } from 'react-native'

const isWeb = Platform.OS === 'web'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    height: 100,
    width: 200,
    top: isWeb ? '50vh' : '50%',
    left: isWeb ? '50vw' : '50%',
    backgroundColor: 'rgb(255, 255, 255)',
    zIndex: 100,
  }
})
