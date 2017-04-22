let div = document.querySelector("div");

let first = e => console.log("first", e);

div.addEventListener("click", first);
div.removeEventListener("click", first);

div.addEventListener("click", e => console.log("second", e));
div.addEventListener("click", e => console.log("third", e));