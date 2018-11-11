import * as React from 'react'
import Router, { appHistory } from './lib/Router'
import Layout from './Layout'
import { Provider as UnstatedProvider } from 'unstated'
import authContainer, { AuthContainer } from './containers/auth'
import UNSTATED from 'unstated-debug'
import ApolloProvider from './lib/ApolloProvider'

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
      <ApolloProvider>
        <UnstatedProvider>
          <Router>
            <Layout />
          </Router>
        </UnstatedProvider>
      </ApolloProvider>
    )
  }
}
