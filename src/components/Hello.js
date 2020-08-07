import React, { Component }  from 'react'

class Hello extends Component{

    constructor(props) {
        super(props);
        this.state = {
            feedback: 'kkk'
        };
    }
   
    componentDidMount() {
      const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({feedback: data[0]}));
   }
    render() {
        return (
          <form>
          <h1>Hello {this.state.feedback.name}</h1>
          <p>Enter your name:</p>
          <input
            type='text'
            name='username'
          />
          <p>Enter your description:</p>
          <input
            type='textarea'
            name='description'
            onChange={this.myChangeHandler}
          />
          <p>
          <input
            type='submit'
            value='Submit'
            onChange={this.myChangeHandler}
          />
          </p>
          </form>
        );
      }
}
export default Hello