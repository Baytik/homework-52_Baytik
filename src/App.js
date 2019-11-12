import React, {Component} from 'react';
import './App.css';
import Circle from "./component/Circle/Circle";
// import Person from './component/Person';
// import Circle from "./Circle/Circle";

class App extends Component {
    state = {
        numbers: [],
    };

    generateNumbers = () => {
      let array = [];
      for (let i = 0; i < 5;) {
          const number = Math.floor(Math.random() * (36 - 5 + 1)) + 5;


          if(array.includes(number)) {
              continue;
          } else {
              array.push(number);
              i++;
          }
      }
        array.sort(function (a, b) {
            return a - b
        });
      this.setState({
          numbers: array,
      })
    };

  render() {
        return (
            <div className="App">
                {this.state.numbers.map(number => {
                    return <Circle number={number}/>
                })}
                <button onClick={this.generateNumbers}>New numbers</button>
            </div>
        )
  }
}

export default App;