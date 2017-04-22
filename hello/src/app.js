let div = document.querySelector("div");
let customFire = new CustomEvent("fire", {
    detail: {
        type: "hot",
        prio:42
    }
});

div.addEventListener("fire", e => console.log(e));

div.dispatchEvent(customFire);