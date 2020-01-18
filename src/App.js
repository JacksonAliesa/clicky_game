import React from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import Wrapper from './components/Wrapper';
import Score from './components/Score';
import friends from './friend.json';

class App extends React.Component {
	state = {
		friends,
		//empty array
		clicks: [],
		//counter to keep track of clicks
		score: 0,
		topscore: 0
	};

	// randomized images function randomizes the imgs after one is clicked
	randomImg = () => {
		this.setState({
			friends: this.state.friends.sort(() => Math.random() - 0.5)
		});
	};

	//function to reset game after win or loss
	resetGame = () => {
		this.setState({ score: 0 });
		this.setState({ clicks: [] });
	};

	//on click function
	countFriends = (id) => {
		this.randomImg();

		//this is the new state we would update on click
		var { score } = this.state;
		var { topscore } = this.state;
		console.log(`"ID:" ${id}`);

		//this looks to see if the ID is within the array of previously clicked characters
		if (this.state.clicks.includes(id)) {
			//if ID matches an ID within the array send alert
			alert('Pack your bags! You are getting sent to the wall!');
			//call the function to reset the game
			this.resetGame();
		} else {
			//if ID is not in the array push it into the clicked characters array
			this.state.clicks.push(id);

			//make a variable to track the score as it increases
			let scoreKeeper = score + 1;
			//set the score property to the scoreKeeper variable
			this.setState({ score: scoreKeeper });

			//check highscore
			var highestScore = topscore;

			if (scoreKeeper > highestScore) {
				this.setState({ topscore: scoreKeeper });
				if (scoreKeeper === 12) {
					//alert a win if it reaches 12
					alert('Yay you won! You can stay in your kingdom!');
					this.resetGame();
				}
			}
		}
	};

	render() {
		return (
			<Wrapper>
				<Header />
				<div className="row">
					<Score topscore={this.state.topscore} score={this.state.score} />
				</div>

				<div className="row">
					{this.state.friends.map((friend) => (
						<Characters
							onClick={() => this.countFriends(friend.id)}
							name={friend.name}
							image={friend.image}
							id={friend.id}
							key={friend.id}
						/>
					))}
				</div>
			</Wrapper>
		);
	}
}
export default App;
