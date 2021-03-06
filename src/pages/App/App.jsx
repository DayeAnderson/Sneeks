import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import AddSneaker from '../AddSneaker/AddSneaker';
import SneakerList from '../SneakerList/SneakerList';
import * as sneakerAPI from '../../services/sneakers-api';

class App extends Component {
  state = {
    sneakers: [],
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddSneaker = async newSneakerData => {
    const newSneaker = await sneakerAPI.create(newSneakerData);
    newSneaker.addedBy = {name: this.state.user.name, _id: this.state.user._id}
    this.setState(state => ({
      sneakers: [...state.sneakers, newSneaker]
    }), () => this.props.history.push('/sneakers'));
  }
  
  async componentDidMount() {
    const sneakers = await sneakerAPI.getAll();
    this.setState({sneakers})
  }

  render() {
    const {user} = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact path="/"
          render={() => (
            <main>
              <h1>Welcome, Sneakerhead.</h1>
            </main>
          )}
        />
        <Route
          exact path="/signup" render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact path="/login" render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact path="/users" render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route 
          exact path='/sneakers/add'
          render={() =>
            authService.getUser() ?
            <AddSneaker
            handleAddSneaker = {this.handleAddSneaker}
            user={this.state.user}
            />
          :
          <Redirect to='/login' />
          }/>
        <Route 
          exact path='/sneakers' 
          render={() => 
            <SneakerList 
            sneakers = {this.state.sneakers}
            user={this.state.user}
            />
          }/>
      </>
    );
  }
}

export default App;
