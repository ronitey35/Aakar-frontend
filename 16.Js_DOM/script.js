// document.getElementById("header").style.color = "blue";

// const para1 = document.getElementById("paragraph");
// console.log(para1);

// const heading = document.getElementsByClassName("heading2");
// console.log(heading);

// const paragraph = document.getElementsByTagName("p");
// console.log(paragraph);

// const header = document.querySelector("#header");
// console.log(header);
// const header1 = document.querySelector(".heading2");
// console.log(header1);
// const header2 = document.querySelectorAll(".heading2");
// console.log(header2);
// header2.forEach((heading) => console.log(heading.textContent));

// const heading = document.getElementById("header");
// console.log(heading.textContent);
// heading.textContent = "hello,world";
// console.log(heading.textContent);
// const division = document.getElementById("div");
// division.innerHTML = "<h1> hello world </h1> ";

// const ulParent = document.getElementById("parent");
// const newList = document.createElement("li");
// newList.textContent = "Item 4";
// ulParent.appendChild(newList)

// const division = document.getElementById("parent");
// const newElement1 = document.createElement("h1");
// const newElement2 = document.createElement("h2");
// const newElement3 = document.createElement("p");

// newElement1.textContent = "Heading 1";
// newElement2.textContent = "Heading 2";
// newElement3.textContent = "hsajkdhfkjgashjshdghjhsfbjhdsfbhjsdfhjvbfhdj";

// division.append("Heello", newElement1, newElement2, newElement3);

// const division = document.getElementById("parent");
// const newheading = document.createElement("h2");
// newheading.textContent = "This is prepend heading";

// division.prepend(newheading);

// const parent = document.getElementById("parent");
// const child1 = document.getElementById("child");

// const child2 = document.createElement("h2");
// child2.textContent = "This is a replaced child";

// // parent.replaceChild(child2, child1);

// parent.replaceChild(child2, child1);

// const parent = document.getElementById("parent");
// const removeChild = document.getElementById("remove");
// // const removeChild2 = document.getElementById("child");

// // parent.removeChild(removeChild2);
// removeChild.remove();

// const image = document.getElementById("img");
// image.setAttribute("alt", " this is new alt");
// image.setAttribute("src", "cat.jpeg");

// console.log(image.getAttribute("alt"));
// console.log(image.getAttribute("src"));

// const input = document.getElementById("name1");
// input.value = "J0hn doe";
// const input = document.getElementById("name1");
// input.removeAttribute("disabled");

// const heading1 = document.getElementById("h1");
// heading1.style.color = "red";
// const heading2 = document.getElementById("h2");
// heading2.style.fontSize = "10px";

// const heading1 = document.getElementById("h1");
// heading1.style.cssText = "color : blue; font-size: 20px;border: 2px solid red ";
// const button1 = document.getElementById("btn");

// button1.addEventListener("click", () => {
//  const isConfirm= confirm("Are  you sure?");
// });

// const input = document.getElementById("input");
// input.addEventListener("keyup", (event) => {
//   console.log(event.key);
// });
// const input = document.getElementById("input");
// input.addEventListener("keydown", (event) => {
//   console.log(` The key pressed was ${event.key} `);
// });

// const form = document.getElementById("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   alert("form was submitted");
// });

// const h1 = document.getElementById("hover");
// h1.addEventListener("mouseover", () => {
//   h1.style.color = "blue";
// });
// h1.addEventListener("mouseout", () => {
//   h1.style.color = "red";
// });
// h1.addEventListener("click", () => {
//   alert("H1 was clicked");
// });

// const input = document.getElementById("input");
// input.addEventListener("focus", () => {
//   console.log("input was focused");
// });
// input.addEventListener("blur", () => {
//   console.log("input lost the focus");
// });

// const dropdown = document.getElementById("dropdown");
// dropdown.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });
// const input = document.getElementById("input");
// input.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

// const input = document.getElementById("input");
// input.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

// const button = document.getElementById("button");
// button.addEventListener(
//   "click",
//   () => {
//     console.log("Button was clicked");
//   },
//   { once: true }
// );
// const button = document.getElementById("button");
// function log() {
//   console.log("button click");
// }

// button.addEventListener("click", log);
// button.removeEventListener("click", log);

// const button = document.getElementById("button");

// button.addEventListener("click", (event) => {
//   console.log(event.target);
//   console.log(event.type);
// });
