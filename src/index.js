import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//functional component vs class component --> to keep state or data we use class based component
//therefore we would need react Component for some basic property

//Downwords data flow in react

const API_kEY = "AIzaSyBJR4lkttLko0TlhEr2itJOkx8BWEqo-YI";


//create component 

class App extends Component{
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		YTSearch({key:API_kEY , term:'Iphone SE'}, (videos) => {
			this.setState({
				videos : videos,
				selectedVideo : videos[0]
			});
			//this.setState({videos: videos});
		});
	}
	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect = {(video) => this.setState({selectedVideo:video})}
					videos={this.state.videos} 
				/>
			</div>
		);
	}
}
// render content

ReactDOM.render(<App/>, document.querySelector('.container'));