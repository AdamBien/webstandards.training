let textInput = document.querySelector("input[type=text]");
console.dir(textInput);

textInput.addEventListener("keypress", e => console.log(e.target.value));

let buttonInput = document.querySelector("input[type=button]");
console.dir(buttonInput);

let button = document.querySelector("button");
console.dir(button);

let select = document.querySelector("select");
console.dir(select);

let progress = document.querySelector("progress");
console.dir(progress);

let meter = document.querySelector("meter");
console.dir(meter);