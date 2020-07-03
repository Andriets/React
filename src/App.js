import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const me = {
  image:
    "https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  name: "Mykola",
  age: 19
};

function Image(props) {
  console.log("Image props:", props);
  return <img width="300px" src={props.src} alt="" />;
}

// function MyItem(props) {
//   // console.log(props);
//   const { data : {name , age, image} } = props;
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{age} y.o.</h2>
//       <Image src={image}/>
//     </div>
//   );
// }

class MyItem extends React.Component {
  render() {
    const {
      data: { name, age, image }
    } = this.props;
    console.log("MyItem context:", this);
    return (
      <div>
        <h1>{name}</h1>
        <h2>{age} y.o.</h2>
        <Image src={image} />
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <MyItem data={me} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
