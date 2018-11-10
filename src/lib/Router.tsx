import * as React from 'react'
import { Platform } from 'react-native'
import { BrowserRouter, Router } from 'react-router-dom'
import { History, createBrowserHistory, createMemoryHistory, MemoryHistory } from 'history'

let appHistory: History | MemoryHistory

interface IProps {
  children: React.ReactNode
}

export default (props: IProps) => {
  if (Platform.OS === 'web') {
    appHistory = createBrowserHistory()
    return <Router history={appHistory}>{props.children}</Router>
  } else {
    appHistory = createMemoryHistory() as MemoryHistory
    return <Router history={appHistory}>{props.children}</Router>
  }
}

export { appHistory }
