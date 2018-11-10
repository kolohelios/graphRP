import * as React from 'react'
import Router, { appHistory } from './lib/Router'
import Layout from './Layout'
import { Provider } from 'unstated'
import authContainer, { AuthContainer } from './containers/auth'
import UNSTATED from 'unstated-debug'
import { Redirect } from 'react-router'

UNSTATED.logStateChanges = true


export default class App extends React.Component {
  async componentWillMount() {
    const isAuthenticated = await authContainer.getAuthenticatedState()

    if (!isAuthenticated) {
      appHistory.push('/notifications')
    }
  }

  render() {
    return (
      <Provider>
        <Router>
          <Layout />
        </Router>
      </Provider>
    )
  }
}
