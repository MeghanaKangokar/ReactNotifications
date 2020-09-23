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
              <div className="count">{this.state.count}</div>
              <BellIcon width='25' active={false} animate={false}/>
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

  componentDidMount() {
    this.getNotifications();
 }

  getNotifications = () => {
    this.fetchNotifications().then(result => {
      if (!(!result)) {
       var count = 0;
       result.filter((item) => {
         if(!item.read) {
           count++;
         }
         return true;
       });
       this.setState({
         count: count
       });
      }
    });
  }

  async fetchNotifications() {
    return await fetch('http://localhost:4000/api')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        return res;
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export default App;
