import React, { Component } from 'react';

export default class PlayListForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }


    this.addToList = this.addToList.bind(this)
    this.handlesNameChange = this.handlesNameChange.bind(this)
    this.handlesArtistChange = this.handlesArtistChange.bind(this)
    this.handlesTitleChange = this.handlesTitleChange.bind(this)
    this.handlesNotesChange = this.handlesNotesChange.bind(this)

  }



  handlesNameChange (event) {
    event.preventDefault()
    this.setState({userName: event.target.value})
  }

  handlesArtistChange (event) {
    event.preventDefault()
    this.setState({songArtist: event.target.value})
  }

  handlesTitleChange (event) {
    event.preventDefault()
    this.setState({songTitle: event.target.value})
  }

  handlesNotesChange (event) {
    event.preventDefault()
    this.setState({songNotes: event.target.value})
  }



  //In your PlayListForm component you should have a addToList function that happens
  //when the form is submitted.
  //This expression or method (dependin on the syntax you choose) will be comparable to this:

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render () {

    return (

    <form className="container PlayForm" onSubmit={this.addToList}>



      <div className="form-group other row">
        <label for="example-text-input" className="col-2 col-form-label">User Name:</label>
        <div className="col-10">
          <input className="form-control" type="text" id="example-text-input" onChange={this.handlesNameChange} value={this.state.userName} />
        </div>
      </div>
      <div className="form-group row">
        <label for="example-text-input" className="col-2 col-form-label">Artist/Band:</label>
        <div className="col-10">
          <input className="form-control" type="text" id="example-text-input" onChange={this.handlesArtistChange} value={this.state.songArtist} />
        </div>
      </div>
      <div className="form-group other row">
        <label for="example-text-input" className="col-2 col-form-label">Title:</label>
        <div className="col-10">
          <input className="form-control" type="text" id="example-text-input" onChange={this.handlesTitleChange} value={this.state.songTitle} />
        </div>
      </div>
      <div className="form-group row">
        <label for="example-text-input" className="col-2 col-form-label">Notes:</label>
        <div className="col-10">
          <textarea className="form-control" id="exampleTextarea" rows="3" onChange={this.handlesNotesChange} value={this.state.songNotes} />
        </div>
      </div>

      <div className="form-submit-div">
        <input className="btn btn-success" type="submit" value="submit" />
      </div>

    </form>


    )
  }
}
