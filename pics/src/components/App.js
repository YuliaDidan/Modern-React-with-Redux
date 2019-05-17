import React from 'react';
import SearchBar from './SearchBar'; 
import unspalsh from '../api/unspalsh';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unspalsh.get('/search/photos', {
				params: { query: term }				
			});	
		console.log(response);	
		
		this.setState({ images: response.data.results });
	}

	render () {
		return ( 
			<div className="ui container" style={{marginTop: '10px'}}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images}/>
			</div>
		)
	}    
};

export default App;