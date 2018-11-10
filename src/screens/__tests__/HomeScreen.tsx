import HomeScreen from '../HomeScreen'
import * as React from 'react'
import renderer from 'react-test-renderer'

describe('Header', async () => {
  test('Header renders', () => {
    const header = renderer.create(<HomeScreen />).toJSON()
    expect(header).toBeDefined()
  })
})
