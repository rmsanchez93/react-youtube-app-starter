import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MainVideo from "./MainVideo";
import VideoList from "./VideoList";
import ApiKey from './keys'
import _ from 'lodash'

class App extends Component {
  constructor(){
    super()
    this.state = {
      videos: [],
      searchTerm: "dogs",
      mainVideo: null,
      isLoading: true
    }
  }

  // state = {
  //   vidoes: []
  // }


  componentDidMount(){
    // console.log("Test")
    // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${ApiKey.API_KEY}&q=${this.state.searchTerm}&type=video`)
    // .then( res =>  res.json() )
    // .then( data => {
    //   this.setState({
    //     videos: data.items,
    //     mainVideo: data.items[0],
    //     isLoading: false
    //   })
    // })

    this.fetchVideos()
  }

  changeMainVideo = (video) => {
    // debugger
    this.setState({
      mainVideo: video
    })
  }

  changeSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    }, ()=> this.fetchVideos())

    // console.log(this.state.searchTerm)
  }

  fetchVideos = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${ApiKey.API_KEY}&q=${this.state.searchTerm}&type=video`)
    .then( res =>  res.json() )
    .then( data => {
      this.setState({
        videos: data.items,
        mainVideo: data.items[0],
        isLoading: false
      })
    })
  }

  render() {
    // console.log(ApiKey)
    const videoSearch = _.debounce(term => {
      this.changeSearchTerm(term);
    }, 200);
    // console.log(this.state.searchTerm)
    return (<div>
      {
      this.state.isLoading
      ? <h4> Loading.... </h4>
      : 
      <div>
      <SearchBar 
      changeTerm={videoSearch}
      fetchVideos={this.fetchVideos} />
      <MainVideo video={this.state.mainVideo} />
      <VideoList videos={this.state.videos} changeVideo={this.changeMainVideo} />
      </div>
      }
      
      </div>);
  }
}

export default App;
