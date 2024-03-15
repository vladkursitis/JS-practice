// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";

const header = document.createElement("h3");
header.style.color = "blue";
header.classList.add("header");
header.textContent = "I’m a blue h3!";

const bigContent = document.createElement("div");
bigContent.style.cssText = "border-style: solid; border-color: black; background: pink;";
bigContent.classList.add("bigContent");
const inHeader = document.createElement("h1");
inHeader.classList.add("inHeader");
inHeader.textContent = "I'm in a div";
const inPara = document.createElement("p");
inPara.classList.add("inPara");
inPara.textContent = "ME TOO!";

bigContent.appendChild(inHeader);
bigContent.appendChild(inPara);

container.appendChild(bigContent);
container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header);

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });