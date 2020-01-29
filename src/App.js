import React from 'react';
import { connect } from 'react-redux';
import { loadUser, setUser } from './actions/authenticate';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


/* Pages */
import LoginPage from './pages/login';
import HomePage from './pages/home';
import userMain from './pages/user/userMain';
/* Pages */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: window.localStorage.getItem('token') ? true : false,
    };
  }

  componentDidMount() {
    if (this.isAuthenticated()) {
      this.props.loadCurrentUser();
    }
  }

  isAuthenticated = () => {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.setState({ isAuthenticated: true });
      this.props.setUser(token);
      return true;
    }

    return false;
  };

  componentWillReceiveProps(newProps) {
    if (newProps.isAuthenticated !== this.state.isAuthenticated) {
      this.setState({
        isAuthenticated: newProps.isAuthenticated,
      });
    }
  }

  render() {
      return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                {/* To build authentication in the future*/}

                <Route path="/usermain" component={userMain} />
                <Route path="/" component={HomePage} />
                
            </Switch>
        </Router>
      )
    // return <AuthenticatedRoutes isAuthenticated={this.state.isAuthenticated} />;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loadCurrentUser: () => {
      return dispatch(loadUser());
    },
    setUser: token => {
      return dispatch(setUser(token));
    },
  };
};

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
