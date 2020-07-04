import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const me = {
  image:
    "https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  name: "Mykola",
  age: 19,
  description: "Such a good boy <3"
};

function Image(props) {
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
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  button = () => {
    this.setState({
      show: !this.state.show
    });
  };

  like = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { name, age, image, description }
    } = this.props;
    return (
      <div className={"container"}>
        <h1>{name}</h1>
        <h2>{age} y.o.</h2>
        <Image src={image} />
        <br />
        <div className={"btns"}>
          <button type="button" onClick={this.button}>
            {this.state.show ? "hide" : "Description"}
          </button>
          <button
            type="button"
            onClick={this.like}
            className={this.state.like ? "btn-like" : ""}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{description}</p> : null}
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
