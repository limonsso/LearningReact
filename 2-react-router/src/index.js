import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';

// COMPONENTS
import Posts from './components/posts'
import Profile from './components/profile'
import PostsItem from './components/posts_item'
import NotFound from './components/404'

class  App extends Component  {
  render() {
    return <div>Home</div>
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <header>
        <div>Header</div>
        <Link to='/'>=>Home</Link><br/>
          <Link to='/posts'>=>Posts</Link><br/>
        <Link to='/profile'>=>Profile</Link>
      </header>
      <hr/>
      <Switch>
        <Route path="/posts/:id" component={PostsItem}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/posts" component={Posts}></Route>
        <Route exact path="/" component={App}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
      <hr/>
      <div>Footer</div>
    </div>
  </BrowserRouter>
  ,document.querySelector('#root'))
