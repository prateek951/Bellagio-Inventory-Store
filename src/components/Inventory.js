import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFoodForm from "./AddFoodForm";
import EditFoodForm from "./EditFoodForm";
import Login from "./Login";
import base, { firebaseApp } from "../fb/fbApp";
class Inventory extends Component {
  static defaultProps = {
    foods: PropTypes.object,
    loadSamples: PropTypes.func,
    updateFood: PropTypes.func,
    deleteFood: PropTypes.func
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      owner: null
    };
    this.bindEvents();
  }
  bindEvents() {
    this.authenticate = this.authenticate.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }
  authHandler = async authData => {
    const store = await base.fetch(this.props.storeName, { context: this });
    console.log(store);
    if (!store.owner) {
      //make the owner
      await base.post(`${this.props.storeName}/owner`, {
        data: authData.user.uid
      });
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate(provider) {
    // console.log(provider);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
    // Look up the current store in firebase database
  }

  async doLogout() {
    console.log("Logging the user out...");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  }

  render() {
    const logout = <button onClick={this.doLogout}>Logout</button>;

    // 1.Check if they are loggedin
    if (!this.state.uid) return <Login authenticate={this.authenticate} />;
    // If you are the owner of the store then only show the edit forms
    // for inventory
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>
            Sorry you are not the owner. You do not have required permissions
          </p>
          {logout}
        </div>
      );
    }
    // They must be the store owners (render the inventory)
    return (
      <Fragment>
        <div className="inventory">
          <h2>Inventory</h2>
          {logout}
          {Object.keys(this.props.foods).map(
            key =>
              console.log(key) || (
                <EditFoodForm
                  deleteFood={this.props.deleteFood}
                  updateFood={this.props.updateFood}
                  foods={this.props.foods}
                  key={key}
                  index={key}
                  food={this.props.foods[key]}
                />
              )
          )}
          <AddFoodForm addFood={this.props.addFood} />
          <button onClick={this.props.loadSamples}>
            Load Sample Food Items
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Inventory;
