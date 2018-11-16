import React, { Component } from 'react';
// import axios from 'axios';

import './App.css';

// const URL = 'http://localhost:3000/recipes';


class App extends Component {

  constructor(props) {
   super(props);

   this.state = {
     data: [],
     isLoading: false,
     error: null,
   };
 }

 async componentDidMount() {
   this.setState({ isLoading: true });
    const response = await fetch(`https://obscure-woodland-53526.herokuapp.com/recipes`)
    const json = await response.json()
     this.setState({data: json})
    }

  render() {

    const { data } = this.state;
    console.log(this.state)
    // if (error) {
    //       return <p>{error.message}</p>;
    //     }
    //
    // if (isLoading) {
    //   return <p>Loading ...</p>;
    // }

    return (
      <div className="App">
        <header className="App-header">

          <ul>
            {data.map(recipe =>
              <li key={recipe.id}>
                <h3>{recipe.title}</h3>
              </li>
            )}
          </ul>

        </header>
      </div>
    );
  }
}

export default App;
