import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

export default class Playlist extends Component {

  constructor(props) {
    super(props)

    this.state = {
      songs: []
    }

    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
  }


  fetchData = (e) => {
      e.preventDefault();
      console.log("hey", e)
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }


  render() {

    return(

      <div className="container">

        {/* <form>
          <input type="submit" value="update" onSubmit={this.fetchData} />
        </form> */}
        <div className="container">
          <button type="button" value="update" onClick={this.fetchData}>Update</button>
          <PlayListItem songs={this.state.songs}/>
        </div>

      </div>
    )

  }

}
