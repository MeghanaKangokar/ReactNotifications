import React from 'react';
import { Card } from 'react-bootstrap';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }
  componentDidMount() {
     this.getNotifications();
  }

  sort = (array) => {
    array.sort((a,b) => new Date(a.date) < new Date(b.date) ? 1 : -1);
    return array;
  }

  getNotifications = () => {
    this.fetchNotifications().then(result => {
      if (!(!result)) {
        this.setState({
          notifications: this.sort(result)
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

  async updateRead() {
    return await fetch('http://localhost:4000/api/read')
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

  formatDate = (d) => {
     var date = new Date(d);
     return `${date.toLocaleString('default', { month: 'long' })}  ${date.getDate()}, ${date.getFullYear()}`;
  }

  render() {
    return (
      <div>
        <button onClick={this.markAsRead}>Mark all as read</button>
        {this.state.notifications.length > 0 ?
          this.state.notifications.map((item, index) => {
            return (
              <div key={index}>
               <Card className={!item.read? 'activeNotifications': null}>
                  <Card.Body>
                    <Card.Text className="text">
                      {item.title}
                    </Card.Text>
                    <Card.Text className="date">
                      {this.formatDate(item.date)}
                      {
                        item.read? 
                        <span className="read">
                          Read
                        </span> : null 
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })
          : null}
      </div>
    );
  }
  
  markAsRead = () => {
    this.updateRead().then(result => {
      if (!(!result)) {
        this.getNotifications();
      }
    });
  }
}

export default Notification;
