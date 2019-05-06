import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Contact extends Component {
  _isMounted = false;
  state = {
    items: "",
    img: ""
  };

  componentDidMount() {
    this._isMounted = true;
    fetch(
      `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${
        this.props.match.params.id
      }`
    )
      .then(res => res.json())
      .then(res => {
        if (this._isMounted) {
          this.setState({
            items: res,
            img: res.images
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
      <div className="mt-3">
        <div className="col-md-6">
          <img width="300" src={this.state.img.transparent} alt="" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.items.name}</h3>
        </div>
      </div>
    );
  }
}

export default Contact;
