import LoginScreen from '../LoginScreen'
import * as React from 'react'
import renderer from 'react-test-renderer'

describe('Header', async () => {
  test('Header renders', () => {
    const header = renderer.create(<LoginScreen />).toJSON()
    expect(header).toBeDefined()
  })
})
