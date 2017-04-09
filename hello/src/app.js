console.log(window.document === document);
console.log(window === self);
console.log(document.lastModified);

console.log(document.defaultView === window);
console.log(document.title);

console.log(document.body);

document.body.innerHTML = "<h1>hey dom</h1>";

console.log(window.screen);
