import { Container } from 'unstated'
import { AsyncStorage } from 'react-native'

interface IAuthState {
  activeToken: string
  authenticated: boolean
  refreshToken: string
}

class AuthContainer extends Container<IAuthState> {
  constructor() {
    super()
    this.state = {
      activeToken: '',
      authenticated: false,
      refreshToken: '',
    }

  }

  pullRefreshToken = async () => {
    const refreshToken = await AsyncStorage.getItem('refreshToken')

    if (!refreshToken) {
      this.setState({
        authenticated: false,
      })
    }
    console.log(refreshToken)
  }

  getAuthenticatedState = async () => {
    await this.pullRefreshToken()

    if (!this.state.authenticated) {
      return false
    }

    return true
  }
}

const authContainer = new AuthContainer()
export { authContainer as default, AuthContainer }



// const testAsyncStorage = async () => {
//   // await AsyncStorage.setItem('test', 'test')
//   const keys = await AsyncStorage.getAllKeys()
//   console.log(keys)
// }

// testAsyncStorage()
