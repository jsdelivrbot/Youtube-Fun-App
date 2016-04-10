//bwowser key 1 : AIzaSyBJR4lkttLko0TlhEr2itJOkx8BWEqo-YI

import  React from 'react';

const VideoDetail = ({video}) => {
	if(!video){

		return <div> Loading... </div>
	}
	//{video} = props.video i.e video property of object passed
	const videoId = video.id.videoId;
	const url = `https://youtube.com/embed/${videoId}`; //"https//.."+videoId;
	return (
		<div className ="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item"  src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail