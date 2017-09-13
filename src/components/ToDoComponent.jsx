import PropTypes from 'prop-types'
import React, { Component } from 'react'

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

  addTodo () {
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
          <input
            value={todoText}
            placeholder='Название задачи'
            onChange={this.updateText}
          />
          <button onClick={this.addTodo}>Добавить</button>
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
