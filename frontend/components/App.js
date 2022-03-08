import React from 'react'

import Form from './Form'
import TodoList from './TodoList'

let idx = 0
const getIdx = () => ++idx

const initialTodos = [
    {
      id: getIdx(),
      todo: 'Change the Tires',
      checked: false,
    },
    {
      id: getIdx(),
      todo: 'Change the Tires',
      checked: false,
    },
    {
      id: getIdx(),
      todo: 'Change the Tires',
      checked: false,
    }
  ]
  
const initialState = {
    errorMessage: '',
    todos: initialTodos,
    form: {
      textInput: '',
      completed: false,
    }
  }

// addTodo = () => {
  
// }
  

export default class App extends React.Component {
  state = initialState
  
  render() {
    //........................
    console.log(this.state)
    const { todos } = this.state
    return (      
      <div>
        <TodoList todos={todos}/>
        <Form /> 
      </div>
    )
  }
}
