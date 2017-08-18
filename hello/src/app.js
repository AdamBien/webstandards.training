let div = document.querySelector("div");
let color = document.querySelector("input[type=color]");
console.log(div.style);
color.onchange = e => div.style.backgroundColor = e.target.value;

let text = document.querySelector("input[type=text]");
text.onkeypress = e => div.innerText = e.target.value;

let detail = document.getElementById('detail');
detail.classList.add('mono');


console.log("div font size", window.getComputedStyle(div).fontSize);

let html = document.querySelector("html");
console.log("html default font size", getComputedStyle(html).fontSize);


let last = document.querySelector("#last");
console.log("position",getComputedStyle(last).position);
