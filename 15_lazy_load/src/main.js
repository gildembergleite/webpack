// Using Lazy Load
const body = document.querySelector("body");
const btn = document.createElement("button");
btn.appendChild(document.createTextNode("Click me"));
body.appendChild(btn);

btn.onclick = (e) =>
  import("./lazy").then((module) => {
    const lazy = module.default;
    lazy();
  });
