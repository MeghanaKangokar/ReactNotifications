import React from 'react';
import './App.css';
import Notification from './components/Notifications';
import Home from './components/home';
import {Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BellIcon from 'react-bell-icon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:1
    };
    this.badge = React.createRef();
  }
  render() {
    return (
      <div className="App">
        <Navbar expand="lg">
        <Navbar.Brand href="/">NIKULSAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/notifications" ref={this.badge}>
              <div>{this.state.count}</div>
              <BellIcon width='40' active={false} animate={false}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Navbar>
       <Router>
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/notifications' component={Notification}></Route>
            </Switch> 
      </Router>
      </div>
    );
  }
}

export default App;
