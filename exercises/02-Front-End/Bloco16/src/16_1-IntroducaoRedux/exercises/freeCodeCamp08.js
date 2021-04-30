import Redux from 'redux';

// 8 - There's a basic notesReducer() and an addNoteText() action creator defined in the code editor. Finish the body of the addNoteText() function so that it returns an action object. The object should include a type property with a value of ADD_NOTE, and also a text property set to the note data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.
// Next, finish writing the switch statement in the notesReducer(). You need to add a case that handles the addNoteText() actions. This case should be triggered whenever there is an action of type ADD_NOTE and it should return the text property on the incoming action as the new state.

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
