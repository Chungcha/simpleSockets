import React from 'react';
import './App.css';

export default class App extends React.Component{
  
  constructor(){
    super()
    this.state = {
      currentUser: null,
      allRooms: [],
      currentRoom: {
        room: {},
        users: [],
        messages: []
      }
    }
  }

  render(){
    return(
      <div>

      </div>
    )
  }

}