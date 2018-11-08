import App from '../App'
import * as React from 'react'
import renderer from 'react-test-renderer'

describe('Make sure App renders', () => {
  test('app renders?', () => {
    const app = renderer.create(<App/>).toJSON()
    expect(app).toBeDefined()
  })
})
