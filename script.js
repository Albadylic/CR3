const input = document.querySelector("#input-box");
const submitButton = document.querySelector("button");
const output = document.querySelector("output");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value === "") {
    output.textContent = "Please enter an input";
  } else {
    output.textContent = checkInput(input.value);
  }
});

function checkInput(string) {
  const vowels = "aeiou";

  let count = string
    .split("")
    .filter((letter) => vowels.includes(letter)).length;

  return count;
}
