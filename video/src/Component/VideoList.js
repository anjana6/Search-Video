import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({Videos}) => {

    const renderList = Videos.map((video) => {
        return <VideoItem video = {video}/>;
    });


    return <div>{renderList} </div>;
    
}

export default VideoList;