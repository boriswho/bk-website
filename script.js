// const dropdownFood = document.getElementById("dropdown-food");
// const dropdownFood = document.getElementsByClassName("dropdown-food");
const dropdownFood = document.querySelector(".dropdown-food");
const dropdownPortrait = document.querySelector(".dropdown-portrait");
const dropdownEvent = document.querySelector(".dropdown-event");

dropdownFood.addEventListener("click", function () {
  console.log("Clicked food");
});
dropdownPortrait.addEventListener("click", function () {
  console.log("Clicked portrait");
});
dropdownEvent.addEventListener("click", function () {
  console.log("Clicked event");
});
// dropdownFood.addEventListener("click", function () {
//   console.log("Clicked!");
// });
