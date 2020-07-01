import React, { Component } from "react";
import ApiKey from './keys'
import SearchBar from './SearchBar'
import MainVideo from './MainVideo'
import VideoList from './VideoList'

class App extends Component {
state = {
  videos: [],
  selectedMovie:{},
  searchTerm: "dogs",
  isLoading: true
}
  componentDidMount(){
    //fetch requests works 
    this.fetchVideos()
    console.log('this component is mounted')
  }
  fetchVideos = () =>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${ApiKey.API_KEY}&q=${this.state.searchTerm}&type=video`)
    .then(res=> res.json())
    .then(videosArray=> {
      //videosArray.items is the array of videos
      console.log('this is my fetch', videosArray)
      this.setState({
        videos:videosArray.items,
        isLoading: false,
        selectedMovie: videosArray.items[0]
      }, ()=> console.log('state is set', this.state))
    })
  }
  changeMovie= (movieObj)=>{
    this.setState({
      selectedMovie: movieObj
    })
  }
  handleChange = (str) => {
    console.log('is this workin', str)
    this.setState({
      searchTerm: str
    })
  }
  render() {
    // console.log(ApiKey.API_KEY)
    //we want to click on videoTile and change MainVideo
    //selectedVideo
    return( <div> {this.state.isLoading ? <div> Loading... </div> : <div>
      App component
      <SearchBar handleChange={this.handleChange}/>
      <MainVideo video={this.state.selectedMovie}/>
      <VideoList videos={this.state.videos} changeMovie = {this.changeMovie}/>
      </div>}</div>);
  }
}

export default App;
