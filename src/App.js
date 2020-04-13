import React, { Component } from "react";
import "./App.css";

import CardList from "./components/card-list";
import SearchBox from "./components/search-box";

class App extends Component {
  state = {
    monsters: [
      { name: "Dracula", id: "ew" },
      { name: "Lesilo", id: "lqw" },
      { name: "Vampire", id: "vwe" },
    ],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => this.setState({ monsters: response }));
  }

  handleOnChange = (e) => {
    const { value } = e.target;

    this.setState({ searchField: value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleOnChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
