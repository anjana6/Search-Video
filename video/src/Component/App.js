import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{

    state = {videos:[],selectedVideo:null};
 
    onTermSubmit = async term =>{
        const response = await youtube.get('/search',{
            params:{
                part: 'snippet',
                maxResults: 5,
                key :  'AIzaSyAH0LPToqVwhKWFcNiBrizm70cTO1GCbO4',
                q: term
            }
        });

        this.setState({videos:response.data.items});
    };

    // onTermSubmit = async(term) => {
    //     console.log(term);
    //     try {
    //        const res = await youtube.get('/search',{
    //             params:{
    //                 // part: 'snippet',
    //                 q: term
    //             }
    //         });
    //         console.log(res)
    //     } catch (err) {
    //         console.log(err.message)
    //     }
    // }; 
    onVideoSelect =  video =>{
        this.setState({selectedVideo:video})
        console.log('from the App!',video);
    }

    render(){
        return(
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} Videos = {this.state.videos}/>
                    </div>
                </div>
            </div>
        </div> 
        )
    }

}

export default App;