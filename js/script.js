"use strict";

const link = document.querySelector(".section-5-link");
const section5 = document.querySelector(".section-5");

link.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("link clicked");

  section5.scrollIntoView({
    behavior: "smooth",
  });
});

/*
document.body.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Enter") {
    document.body.style.backgroundColor = "gray";
  } else {
    console.log("nooo");
  }
});

// const body = document.body;

// document.querySelector(".user-name").addEventListener("keydown", function (e) {
//   console.log(e.key);

//   if (e.key === " ") {
//     body.style.backgroundColor = "gray";
//   } else {
//     body.style.backgroundColor = "white";
//   }
// });
*/

/*
const form = document.querySelector("form");
const nameInput = document.querySelector(".user-name");
const ageInput = document.querySelector(".user-age");

let users = [];

// 1. add an eventListener with "submit" type
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // 2. create object
  const newUser = {
    name: nameInput.value,
    age: Number.parseInt(ageInput.value),
  };

  // 3. push object into users Array
  users.push(newUser);

  // 4. clear inputs
  nameInput.value = ageInput.value = "";

  // 5. log users Array
  console.log(users);
});
*/

/*
const result = document.querySelector(".content");
const showClicked = function () {
  console.log("clicked on the list");

  // remove eventListener
  result.removeEventListener("click", showClicked);
};

result.addEventListener("click", showClicked);
*/

/*
// PART 1
// 1. add eventListener to all items
listItem.forEach((item) => {
  item.addEventListener("click", function () {
    // 2. get content of listItem
    const text = item.textContent;

    // 3. set the text of list item to content
    result.textContent = text;
  });
});

// PART 3
// 1. create delete button
const buttonEl = document.createElement("button");
buttonEl.textContent = "Clear list";

// 2. add eventListener
buttonEl.addEventListener("click", function () {
  // 3. remove all the list items
  list.innerHTML = "";
  //   list.textContent = "";
});

// 4. insert button into html
document.body.prepend(buttonEl);
*/
