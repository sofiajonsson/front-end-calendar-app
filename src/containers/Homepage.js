import React, { Component } from 'react';

class Homepage extends Component {
	  state = {
	    name: ''
	  }

	  constructor() {
	    super()
	    this.name = React.createRef()
	    this.email = React.createRef()
	    this.password = React.createRef()

	    // if (this.getToken()) {
	    //   this.getProfile()
	    // }
	  }
//login feature goes up to App.js (through setting currentUser)
	  login = (ev) => {
	    ev.preventDefault()

	    let name = this.name.current.value
			console.log(name);
	    let email = this.email.current.value
	    let password = this.password.current.value

	    fetch('http://localhost:3000/login', {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify({ user:{name, email, password} })
	    })
	    .then(res => res.json())
	    .then(json => {
	      console.log('login:', json)
				this.props.setCurrentUser(json)
	      if (json && json.jwt) {
	        this.saveToken(json.jwt)
	        this.props.setCurrentUser(json)
	      }
	    })
	  }

	  saveToken(jwt) {
	    localStorage.setItem('jwt', jwt)
	  }

	  getToken(jwt) {
	    return localStorage.getItem('jwt')
	  }

	  render() {
	    return (
	      <div className="App">
	        <div>
	          User is Currently: {this.state.name || 'logged out'}
						<h3>Please Login to Access Your Calendar</h3>
	        </div>
					<div className="Login">
	        <form onSubmit={this.login}>
	          <input type="text" placeholder="name" ref={this.name} />
						<br></br>
	          <input type="text" placeholder="email" ref={this.email} />
						<br></br>
	          <input type="password" placeholder="password" ref={this.password} />
						<br></br>
	          <input type="submit" />
	        </form>
					</div>
	      </div>
	    );
	  }
	}

export default Homepage;
