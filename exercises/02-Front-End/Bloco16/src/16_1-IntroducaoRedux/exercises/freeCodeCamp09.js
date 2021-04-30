import Redux from 'redux';

// 9 - In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store. Good luck building your first Redux app!

const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = `DECREMENT`; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
    return {type: INCREMENT}
}; // Define an action creator for incrementing

const decAction = () => {
    return {type: DECREMENT}
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

store.dispatch(incAction());
store.dispatch(decAction());
