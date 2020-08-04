import React, { Component } from "react";
import "./ContactStyle.css";

class Contact extends Component {
	state = {
  	name: '',
  	email: '',
  	message: ''
  }

    onNameChange(event) {
    this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
    this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
    this.setState({message: event.target.value})
    }

render() {
 return(
  <div >
    <form id="contact-form" action = "mailto:jrringler13759@gmail.com" method="POST" enctype = "text/plain">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input name = "name" type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input name = "email" type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name = "message" className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  </div>
 );
}

}

export default Contact;

