import React, { Component } from 'react';


export default class PlayListItem extends Component{

  constructor (props) {
    super (props)

    // this.fetchData = this.fetchData.bind(this)
  }


  render() {

    console.log("this.props", this.props)
    console.log("this.props.songs", this.props.songs)

    return (
      <div className="">
        {this.props.songs.map((info) => {
          return (
            <div className="container cards" key={info._id}>
              <p className="" > User:{info.userName}</p>
              <p className="" > Artist/Band:{info.songArtist}</p>
              <p className="" > Title:{info.songTitle}</p>
              <p className="" > Notes:{info.songNotes}</p>
            </div>
          )
        })}
      </div>
    )
  }

}
