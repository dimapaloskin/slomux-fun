import { connect } from '../react-slomux'
import { addTodo } from '../actions'
import ToDoComponent from '../components/ToDoComponent'

const mapStateToProps = state => ({
  todos: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodo: text => dispatch(addTodo(text)),
  title: ownProps.title
})

const ToDo = connect(mapStateToProps, mapDispatchToProps)(ToDoComponent)

export default ToDo
