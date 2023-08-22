const heading = document.getElementById("heading");
heading.textContent = "some other text";

const hideButton = document.getElementById("hide");
hideButton.addEventListener("click", () => {
  heading.style.display = "none";
});

const unhideButton = document.getElementById("unhide");
unhideButton.addEventListener("click", () => {
  heading.style.display = "block";
});