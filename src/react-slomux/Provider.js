import { Component } from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {
  getChildContext () {
    const { store } = this.props
    return { store }
  }

  render () {
    return this.props.children
  }
}

export const storePropTypes = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
})

Provider.childContextTypes = {
  store: storePropTypes
}

export default Provider
