import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ToDoComponent extends Component {
  constructor (props) {
    super(props)
    this.updateText = this.updateText.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.state = {
      todoText: ''
    }
  }

  updateText (e) {
    const { value } = e.target
    this.setState({
      todoText: value
    })
  }

  addTodo (event) {
    event.preventDefault()

    this.props.addTodo(this.state.todoText)
    this.setState({
      todoText: ''
    })
  }

  render () {
    const { todoText } = this.state
    const { title, todos } = this.props

    return (
      <div>
        <label>{title || 'Без названия'}</label>
        <div>
          <form onSubmit={this.addTodo}>
            <input
              value={todoText}
              placeholder='Название задачи'
              onChange={this.updateText}
              ref={node => node && node.focus()}
            />
            <button type='submit'>Добавить</button>
          </form>
          <ul>
            {todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

ToDoComponent.propTypes = {
  addTodo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ToDoComponent
