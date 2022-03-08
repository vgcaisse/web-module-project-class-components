import React from 'react'

export default class Form extends React.Component {
  onSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { textInput } = this.props
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          value={textInput}
          type='text'
          id='input'
          placeholder='What is yer todo?'
          completed={null}
        />
          
        <input type='submit'/>
      </form>
    )
  }
}
