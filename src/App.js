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
		score: 0,
		topscore: 0
	};

	// score & high score const{state I want to update } this state score & this state high score
	//when card is clicked update the score state
	// this is rereferring to the current class we are in ...read it like this app/state/
	//pass function as 
	//counter function

	// randomized images function
	randomImg = event => {
		this.setState({
			friends: this.state.friends.sort(() => Math.random() - 0.5)})
	}

	countFriends = id => {
		this.randomImg();
	  var { score } = this.state;
	  var { topscore } = this.state;
	  console.log(`ID:" ${id}`)
	}


// on-click function for cards

handleClick = event => {
	console.log("this has been clicked")
	//call random img function
	this.randomImg();
	this.countFriends();
}

render() {
	return (
		<Wrapper>
			<Header />
			<div className="container">
				<div className="row">
					{this.state.friends.map((friend) =>
						<Characters handleClick={this.handleClick} name={friend.name} image={friend.image} id={friend.id}/>)}
				</div>
			</div>
		</Wrapper>
	);
}
}
export default App;
