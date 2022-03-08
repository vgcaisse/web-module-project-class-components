import React from 'react'

import Form from './Form'
import TodoList from './TodoList'

let idx = 0
const getIdx = () => ++idx

const initialTodos = [
    {
      id: getIdx(),
      todo: 'Change the Tires',
      completed: false,
    },
    {
      id: getIdx(),
      todo: 'Power wash the driveway',
      completed: false,
    },
    {
      id: getIdx(),
      todo: 'Unload the truck',
      completed: false,
    }
  ]
  
const initialState = {
    // errorMessage: '',
    todos: initialTodos,
    form: {
      textInput: '',
      completed: false,
    }
  }

export default class App extends React.Component {
  state = initialState

  onChange = (key, value) => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: value },
    })
  }
  
  addTodo = () => {
    const { todos, form: { textInput } } = this.state
    const newTodo = { id: getIdx(), todo: textInput, completed: false }
    this.setState({
      ...this.state,
      form: initialState.form,
      todos: [...todos, newTodo],
    })
  }
  
  toggleCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.todos.map(todo=> {
        if(todo.id === true) {
          return {
            ...todo,
            completed: !false
          }
        }
        return todo
      })
    })
  }

  // isDisabled = () => {
  //   if(this.textInput.length() === 0 ) {
  //     return (true)
  //   } 
  // }
  
  render() {
    //........................
    console.log(this.state)
    const { todos, form } = this.state
    return (      
      <div>
        <h2>Todos:</h2>
        <TodoList todos={todos} />
        <Form onChange={this.onChange} values={form} onSubmit={this.addTodo} /> 
        <div>
          <button onClick={this.toggleCompleted}>Toggle Completed</button>
        </div>
      </div>
      
    )
  }
}
