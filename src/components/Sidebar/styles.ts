import { Dimensions, Platform, StyleSheet } from 'react-native'

const isWeb = Platform.OS === 'web'

export default StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    height:
      isWeb
      ? '100vh'
      : Dimensions.get('window').height - 40,
    top: 40,
    width: 200,
    position: 'absolute',
    zIndex: 10,
  },
  closeControl: {
    padding: 5,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
  },
})
