import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends Component {
  _isMounted = false;
  state = {
    item: []
  };

  componentDidMount() {
    this._isMounted = true;
    fetch("https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get")
      .then(res => res.json())
      .then(res => {
        if (this._isMounted) {
          this.setState({
            item: res.items
          });
        }

        console.log(res);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <h1 className="nav">Items List</h1>
        <ul className="list-group">
          {this.state.item.map((data, key) => (
            <li className="list-group-item" key={data.itemid}>
              <Link to={`/about/${data.itemid}`}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default About;
