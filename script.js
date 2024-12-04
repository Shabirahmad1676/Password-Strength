const inputField = document.querySelector("#input-box");
const suggestion = document.querySelector("#suggestion");

inputField.addEventListener("input", () => {
  let password = inputField.value;
  if (password.length < 8) {

    suggestion.innerText = "Minimum Character is 8";
    suggestion.style.color = "red";

  } else if (password.search(/[a-z]/) == -1) {

    suggestion.innerText = "LowerCase is Missing 🙏🏽";
    suggestion.style.color = "red";

  } else if (password.search(/[A-Z]/) == -1) {

    suggestion.innerText = "UpperCase is Missing 🙏🏽";
    suggestion.style.color = "red";

  } else if (password.search(/[0-9]/) == -1) {

    suggestion.innerText = "Number is Missing 🙏🏽";
    suggestion.style.color = "red";

  } else if (password.search(/[/#/@/!/./(/)/{/}/-/_/?]/) == -1) {

    suggestion.innerText = "Character is Missing 🙏🏽";
    suggestion.style.color = "greenlight";

  } else {
    suggestion.innerText = "Password is  Too Strong 💪";
    suggestion.style.color = "Green";
  }
});
