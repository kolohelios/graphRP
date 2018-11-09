import * as React from 'react'
import { Platform } from 'react-native'
import { BrowserRouter, Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'

export const history: MemoryHistory = createMemoryHistory()

interface IProps {
  children: React.ReactNode
}

export default (props: IProps) => {
  if (Platform.OS === 'web') {
    return <BrowserRouter>{props.children}</BrowserRouter>
  } else {
    return <Router history={history}>{props.children}</Router>
  }
}
