import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import peopleData from "./people.js"
import MyItem from "./components/MyItem"

function Image(props) {
  return <img width="300px" src={props.src} alt="" />;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: peopleData,
    };
  }

  removePerson = person => {
  	const updatePeople = this.state.people.filter(function(item){
  		return item.id !== person.id;
  	});

  	this.setState({
  		people: updatePeople
  	});
  }

  render() {
    return (
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-9"}>
            <div className={"row"}>
                      {this.state.people.map(person => {
                      	return (
                          <div className={"col-6 mb-4"} key={person.id}>
                               <MyItem 
                            			person={person} 
                            			removePerson={this.removePerson}/>
                          </div>
                          );
                      })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default function App() {
//   return (
//     <div className="App">
//       <MyItem />
//     </div>
//   );
// }
export default App

ReactDOM.render(<App />, document.getElementById("root"));
