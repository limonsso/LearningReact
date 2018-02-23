import React, { Component } from 'react';
import { Jumbotron,Input } from 'reactstrap';
class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      keywords:'Logo'
    }
  }
  inputChange=(event)=>{
    this.setState({keywords:event.target.value})
    this.props.newsSearch(event.target.value)
  }
  render(){
    return(
      <div>
        <Jumbotron>
            <h1 className="display-3" onClick={()=>console.log('clicked on logo')}>{this.state.keywords}</h1>
              <Input onChange={this.inputChange.bind(this)}/>
        </Jumbotron>
      </div>
    )
  }
}
export default Header;
