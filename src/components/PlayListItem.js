import React, { Component } from 'react';


export default class PlayListItem extends Component{

  constructor (props) {
    super (props)

  }


  render() {

    console.log("this.props", this.props)
    console.log("this.props.songs", this.props.songs)

    return (
      <div className=" PlayItem">
        {this.props.songs.map((info) => {
          return (

            <div className="card card-inverse key-div cards" key={info._id} style={{backgroundColor: 'rgba(255,255,255)', borderColor: '#333;'}}>
              <div className="cardBlock" style={{backgroundColor: '#333'}}>
                <h4 className="cardTitle">User:</h4>
                <p className="cardText">{info.userName}</p>
              </div>
              <div className="cardBlock" style={{backgroundColor: '#333'}}>
                <h4 className="cardTitle">Artist/Band:</h4>
                <p className="cardText">{info.songArtist}</p>
              </div>
              <div className="cardBlock" style={{backgroundColor: '#333'}}>
                <h4 className="cardTitle">Title:</h4>
                <p className="cardText">{info.songTitle}</p>
              </div>
              <div className="cardBlock" style={{backgroundColor: '#333'}}>
                <h4 className="cardTitle">Notes:</h4>
                <p className="cardText">{info.songNotes}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

}
