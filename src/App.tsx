import * as React from 'react'
import Router from './lib/Router'
import Layout from './Layout'
import { Provider } from 'unstated'


type Props = {};
export default class App extends React.Component<Props> {
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
