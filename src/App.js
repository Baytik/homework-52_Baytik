import React, {Component} from 'react';
import './App.css';
import Person from './component/Person';
import Circle from "./Circle/Circle";

class App extends Component {
    state = {

    };

    generateNumbers = () => {
      let array = [];
      for (let i = 0; i < 5;) {
          const number = Math.floor(Math.random() * 36) + 5;
          if(array.includes(number)) {
              continue;
          } else {
              number.push(array);
          }
      }
    };

  render() {
        return (
            <div className="App">

            </div>

        )
  }
}

export default App;