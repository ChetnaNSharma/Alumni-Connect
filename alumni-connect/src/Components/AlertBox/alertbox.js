import React, { Component } from 'react';
import './alertbox.css';

class AlertBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.hidden ? (
          ' '
        ) : (
          <div
            className='alert alert-success alert-dismissible fade show myalert'
          >
            <p>
              <strong>Great Landing !</strong> Login to have a better experience.
            </p>
            {
              (this.timer = setInterval(() => {
                this.setState({ hidden: true });
              }, 10000))
            }
          </div>
        )}
      </div>
    );
  }
}

export default AlertBox;

