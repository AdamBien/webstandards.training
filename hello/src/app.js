let div = document.querySelector("div");
let color = document.querySelector("input[type=color]");
console.log(div.style);
color.onchange = e => div.style.backgroundColor = e.target.value;

let text = document.querySelector("input[type=text]");
text.onkeypress = e => div.innerText = e.target.value;
