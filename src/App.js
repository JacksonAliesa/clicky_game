import React from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import Wrapper from './components/Wrapper';

import friends from './friend.json';
// import { render } from '@testing-library/react';

class App extends React.Component {
	state = {
		friends,
		//empty array 
		id: [],
		//counter to keep track of clicks
		counter: 0,
		topscore: 0
	};

	//counter function
	countFriends = event => {

	}

	//handle click function 

	handleClick = event => {
		this.randomImg();
		this.countFriends();

	}

	// randomized images function
	randomImg = event => {
		// [] = Math.floor(Math.random() * this.state.characters.length);
		this.setState({
			friends: this.state.friends.sort(() => Math.random() - 0.5)})
	}


// on-click function for cards

handleClick = event => {
	console.log("this has been clicked")
	//call random img function
	this.randomImg();
}

render() {
	return (
		<Wrapper>
			<Header />
			<div className="container">
				<div className="row">
					{this.state.friends.map((friend) =>
						<Characters handleClick={this.handleClick} name={friend.name} image={friend.image} />)}
				</div>
			</div>
		</Wrapper>
	);
}
}
export default App;
