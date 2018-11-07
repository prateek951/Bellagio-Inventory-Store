import React, { Fragment, Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  //  Create an input ref
  storeName = React.createRef();

  constructor(props) {
    super(props);
    this.state = {};
    this.bindEvents();
  }
  bindEvents() {
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    //Get the name of the store from the input field
    const { value: storeName } = this.storeName.value;
    //   console.log(storeName);
    // Change the page to the /store/whatever-the-user-wrote
    this.props.history.push(`/store/${storeName}`);
  }
  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.handleSubmit}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            required
            ref={this.storeName}
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <br />
          <br />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
