import React from 'react'

export default class Form extends React.Component {
  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit()
  }

  onChange = evt => {    
    const { value, id } = evt.target
    this.props.onChange(id, value)
    console.log(value)
  }

  render() {
    const { textInput } = this.props
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          onChange={this.onChange}
          value={textInput}
          type='text'
          id='input'
          placeholder='What is yer todo?'
        />
          
        <input type='submit'/>
      </form>
    )
  }
}
