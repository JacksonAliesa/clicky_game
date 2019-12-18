import React from 'react';
import Header from './components/Header'
import Characters from './components/Characters'
import Wrapper from './components/Wrapper';
import friend from "./friend.json";


function App() {
  return (
    <Wrapper>
      <Characters
        name={friend[0].name}
        image={friend[0].image}
      />
      <Characters
        name={friend[1].name}
        image={friend[1].image}
      />
      <Characters
        name={friend[2].name}
        image={friend[2].image}
      />
      <Characters
        name={friend[2].name}
        image={friend[2].image}
      />
      <Characters
        name={friend[3].name}
        image={friend[3].image}
      />
      <Characters
        name={friend[4].name}
        image={friend[4].image}
      />
      <Characters
        name={friend[5].name}
        image={friend[5].image}
      />
      <Characters
        name={friend[6].name}
        image={friend[6].image}
      />
      <Characters
        name={friend[7].name}
        image={friend[7].image}
      /><Characters
        name={friend[8].name}
        image={friend[8].image}
      /><Characters
        name={friend[9].name}
        image={friend[9].image}
      /><Characters
        name={friend[10].name}
        image={friend[10].image}
      />
      <Characters
        name={friend[11].name}
        image={friend[11].image}
      />
    </Wrapper>
  );
}

export default App;
