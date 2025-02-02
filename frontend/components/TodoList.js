import React from 'react'

export default class TodoList extends React.Component {
  
  render() {
    //.....................
    const { todos } = this.props
    return (
      <div>
        <ul>
          {
            todos.map((to) => {
              const { id, todo, completed } = to
              return (
                <li key={id} className='todoList'>
                  {todo}{completed === true ? '✔️' : ''}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
