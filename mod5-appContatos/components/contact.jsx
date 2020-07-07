import React, { Component } from 'react';
import { formatDate } from '../utils/FormatDate';

class Contact extends Component {
  render() {
    return (
        <article className="contact" data-testid="contact">
          <span className="contact__avatar"><img src={this.props.data.avatar} alt="avatar" /></span>
          <span className="contact__data">{this.props.data.name}</span>
          <span className="contact__data">{this.props.data.phone}</span>
          <span className="contact__data">{this.props.data.country}</span>
          <span className="contact__data">{formatDate(this.props.data.admissionDate)}</span>
          <span className="contact__data">{this.props.data.company}</span>
          <span className="contact__data">{this.props.data.department}</span>
        </article>
    );
  }
}

export default Contact;