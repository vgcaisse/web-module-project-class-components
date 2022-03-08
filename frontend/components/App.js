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
      checked: false,
    }
  }

  

export default class App extends React.Component {
  state = initialState
  
  render() {
    //........................
    console.log(this.state)
    return (      
      <div>
        <ul>
          {
            this.state.todos.map((to) => {
              const { id, todo, completed } = todo
              return (
                <li key={id}>
                  {todo}{id}{completed}
                </li>
              )
            })
          }
        </ul>
        <TodoList />
        <Form /> 
      </div>
    )
  }
}
