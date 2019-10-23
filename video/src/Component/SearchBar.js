import React from 'react';

class SerchBar extends React.Component{
    state = {term:''}; 

    onInputChange = (e) =>{
        this.setState({term: e.target.value});
        console.log(this.state.term)

    }; 
    

    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            // value={this.state.term}
                            onChange={this.onInputChange}
                        
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default SerchBar;