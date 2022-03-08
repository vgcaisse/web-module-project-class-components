import React from 'react'

export default class TodoList extends React.Component {
  
  render() {
    //.....................
    return (
      <div>
        <ul>
          {/* {
            this.todos.map((to) => {
              const { id, todo, completed } = todo
              return (
                <li key={id}>
                  {todo}{id}{completed}
                </li>
              )
            })
          } */}
        </ul>
      </div>
    )
  }
}
