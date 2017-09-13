import React, { Component } from 'react'
import { storePropTypes } from './Provider'

const connect = (mapStateToProps, mapDispatchToProps) =>
  Comp => {
    class Connect extends Component {
      constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
      }
      componentDidMount () {
        const { store } = this.context
        store.subscribe(this.handleChange)
      }

      handleChange () {
        this.forceUpdate()
      }

      render () {
        const { store } = this.context
        return (
          <Comp
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        )
      }
    }

    Connect.contextTypes = {
      store: storePropTypes
    }

    return Connect
  }

export default connect
