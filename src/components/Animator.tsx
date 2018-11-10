import * as React from 'react'
import { Animated } from 'react-native'

interface IProps {
  style?: any
  visibleWhenTrue: boolean
  attributePropertyWhenVisible: number
  attributePropertyWhenNotVisible: number
  styleAttribute: string
  noAnimateOnMount?: boolean
  children: any
}

interface IState {
  animation: Animated.Value
  lastVisibleWhenTrueState: boolean
}

export default class Animator extends React.PureComponent<
  IProps,
  IState
  > {
  constructor(props: IProps) {
    super(props)

    this.state = {
      animation: new Animated.Value(Infinity),
      lastVisibleWhenTrueState: this.props.visibleWhenTrue,
    }
  }

  componentDidMount() {
    const { noAnimateOnMount } = this.props

    this.animate(noAnimateOnMount)
  }

  componentDidUpdate() {
    if (
      this.props.visibleWhenTrue !== this.state.lastVisibleWhenTrueState
    ) {
      this.animate()
      this.setState({
        lastVisibleWhenTrueState: this.props.visibleWhenTrue,
      })
    }
  }

  animate = (onMount?: boolean) => {
    const { animation } = this.state
    const {
      visibleWhenTrue,
      attributePropertyWhenVisible,
      attributePropertyWhenNotVisible,
    } = this.props

    const initialValue = visibleWhenTrue
      ? attributePropertyWhenNotVisible
      : attributePropertyWhenVisible
    const finalValue = visibleWhenTrue
      ? attributePropertyWhenVisible
      : attributePropertyWhenNotVisible

    animation.setValue(initialValue)

    if (onMount) {
      Animated.timing(animation, {
        duration: 0,
        toValue: finalValue,
      }).start()

      return
    }

    Animated.spring(animation, {
      toValue: finalValue,
    }).start()
  }

  render() {
    const { animation } = this.state
    const { styleAttribute, style, children } = this.props

    const styleObject: any = {}

    styleObject[styleAttribute] = animation

    return (
      <Animated.View style={[style, styleObject]}>
        {children}
      </Animated.View>
    )
  }
}
