import Router from '../Router'
import * as React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'

describe('Router lib', async () => {
  test('Router renders for iOS', () => {
    jest.resetModules()

    jest.mock('Platform', () => {
      const Platform = (require as any).requireActual('Platform')
      Platform.OS = 'ios'
      return Platform
    })

    const app = renderer.create(<Router><View /></Router>).toJSON()
    expect(app).toBeDefined()
  })
})
