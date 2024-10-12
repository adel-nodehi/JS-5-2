"use strict";

const list = document.querySelector(".list");
const listItem = document.querySelectorAll(".list-item");
const result = document.querySelector(".content");

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
