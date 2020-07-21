  
import React, { Component } from 'react';
import UserInput from '../components/UserInput/UserInput';
import DisplayInfo from '../components/DisplayInfo/DisplayInfo';
import { fetchUser } from '../services/fetchCalls';


export default class MainContainer extends Component {
    state = {
      username: '',
      profile: {
        name: '',
        followers: 0, 
        following: 0, 
        html_url: ''
      }
    }

    handleChange = ({ target }) => {
      this.setState({ username: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      fetchUser(this.state.username)
        .then(profile => this.setState({ profile }));
        
    }
    
    render() {
      console.log(this.state.profile);
      const { username, profile } = this.state;

      return (
        <>
          <UserInput username={username} onChange={this.handleChange} onSubmit={this.handleSubmit}/> 
          <DisplayInfo profile={profile}/>
        </>
      );
    
    }
}
