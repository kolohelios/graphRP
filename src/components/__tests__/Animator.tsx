import * as React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import Animator from '../Animator'

describe('Animator component', () => {
  test('renders Animator component', ()=> {
    const NONVISIBLE_HEIGHT = 100
    const animator = renderer
      .create(
        <Animator
          visibleWhenTrue={true}
          attributePropertyWhenVisible={0}
          attributePropertyWhenNotVisible={NONVISIBLE_HEIGHT}
          styleAttribute={'top'}
          noAnimateOnMount={true}
        >
          <Text>Test</Text>
        </Animator>,
      )
      .toJSON()
    expect(animator).toBeDefined()
  })
})
