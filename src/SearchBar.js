import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
        <div>
            <input type="text" placeholder="Search" onChange={(e) => this.props.changeTerm(e.target.value)} />
            {/* <button onClick={this.props.fetchVideos}> Search </button> */}
        </div>

        )}
}

export default SearchBar