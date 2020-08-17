const states = ["AC", "AL", "AP", "AM", "BH", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

let optionStates = document.querySelector("#state");
let btnValidateDate = document.getElementById("btnSubmit");
let inputDate = document.getElementById('date');

function options(states) {
  for (let i = 0; i < states.length; i += 1) {
    let state = document.createElement('option');
    optionStates.appendChild(state);
    state.innerHTML = states[i];
  }

}

window.onload = function () {
  options(states);
}

function validateDate(date) {
  let day = parseInt(date.substring(0, 2));
  let mouth = parseInt(date.substring(3, 5));
  let year = parseInt(date.substring(6, 10));
  let bars = date.charAt(2) + date.charAt(5);

  if (date.length !== 10 || bars !== "//") {
    return alert("Formato inserido não é válido")
  }

  if (0 < day < 31 || 0 < mouth < 12 || year < 0) {
    return alert('Data inserida inválida!')
  }
  return true;
}

btnValidateDate.addEventListener('click', validateDate(inputDate.value));