import { AppRegistry, Platform } from 'react-native'
import App from './App'
import config from './config'

AppRegistry.registerComponent(config.app.name, () => App)

if (Platform.OS === 'web') {
  AppRegistry.runApplication(config.app.name, {
    rootTag: document.getElementById(config.web.root)
  })
}
