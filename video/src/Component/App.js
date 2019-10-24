import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';


class App extends React.Component{

    state = {videos:[]};
 
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

    render(){
        return(
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoList Videos = {this.state.videos}/>
        </div>
        )
    }

}

export default App;