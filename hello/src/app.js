let div = document.querySelector("div");
let color = document.querySelector("input[type=color]");
color.setAttribute("data-message", "hello world");
let attributeValue = color.getAttribute("data-message");
console.log(color.dataset.message);
console.log(color.dataset);

console.log(...color.attributes);
