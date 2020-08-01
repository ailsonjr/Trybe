const states = ["AC", "AM", "MG", "BH", "SC", "GO", "CE", "SE"]

let optionStates = document.querySelector("#state");

function options (states) {
	for (let i = 0; i < states.length; i += 1) {
  	let state = document.createElement('option');
    optionStates.appendChild(state);
    state.innerHTML = states[i];
  }
  
}

window.onload = function () {
 options (states);
}