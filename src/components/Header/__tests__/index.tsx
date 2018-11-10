import Header from '..'
import * as React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'unstated'

describe('Header', async () => {
  test('Header renders', () => {
    const header = renderer.create(<Provider><Header /></Provider>).toJSON()
    expect(header).toBeDefined()
  })
})
