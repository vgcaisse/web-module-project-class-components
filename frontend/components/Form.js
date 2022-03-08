import React from 'react'

export default class Form extends React.Component {
  render() {
    const { values } = this.props
    return (
      <form>
        <input 
          // value={values.textInput}
          type='text'
          id=''
          placeholder='What is yer todo?'
          // checked={}
        />
          
        <input type='submit'/>
      </form>
    )
  }
}
