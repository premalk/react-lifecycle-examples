import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name:''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  UNSAFE_componentWillUpdate(prev, next){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  shouldComponentUpdate(prev, next) {
    console.log('next', next);
    console.log('prev', prev);
    console.log('shouldComponentUpdate');
    return true;
  }
  UNSAFE_componentWillReceiveProps(prev, next) {
    console.log('componentWillReceiveProps');
  }
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return true;
  }
  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch');
  }
  render(){
    return (
      <>
      {
        // Type in box and open your log in browser. You will see different lifecycle calls
      }
      <input type="text" value={this.state.name} onChange={this.handleChange}/>
      {// Remove below line <List /> to run project 
      }
      <List />
      </>
    )
  }
}

const List = () => {
  throw new Error('An Error Occured in List Component');
}
export default App;
