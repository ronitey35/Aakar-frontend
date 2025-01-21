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

const division = document.getElementById("parent");
const newheading = document.createElement("h2");
newheading.textContent = "This is prepend heading";

division.prepend(newheading);
