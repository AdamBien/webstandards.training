let div = document.querySelector("div");

let first = e => console.log("first", e);

div.addEventListener("click", first);
div.removeEventListener("click", first);

div.addEventListener("click", e => console.log("second", e));
div.addEventListener("click", e => console.log("third", e));

window.addEventListener("load", e => console.log("load", e));
window.onunload = e => console.log("unload", e);

let text = document.querySelector("input[type=text]");
console.dir(text);
text.value = "hey duke";

let button = document.querySelector("input[type=button]");
button.value = "push me";

let color = document.querySelector("input[type=color]");
color.onchange = e => console.log(e.target.value);
color.value = "#ffffff";

let time = document.querySelector("input[type=time]");
time.value = "13:13";
//time.setAttribute("value", "11:12");
let value = time.getAttribute("value");
console.log("property",value);