import Redux from 'redux';

// 5 - Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively. Then, edit the authReducer() and the action creators to reference these constants instead of string values.

// Change code below this line

const LOGIN = `LOGIN`;

const LOGOUT = `LOGOUT`;

// Change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: // Change this line
      return {
        authenticated: true
      }
    case LOGOUT: // Change this line
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

store.dispacth(authReducer(defaultState, loginUser));
store.dispacth(authReducer(defaultState, logoutUser));