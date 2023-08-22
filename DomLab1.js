// const headingOne = document.getElementById("heading");
// headingOne.textContent = "some text";


// const hideButton = document.getElementById("hide");
// const unhideButton = document.getElementById("unhide");


// hideButton.addEventListener("click", () => {
//   headingOne.style.display = "none";
// });

// unhideButton.addEventListener("click",  () => {
//   headingOne.style.display = "block";
// });

const headingOne = document.getElementById("heading");

const hideOrUnhide = (act) => {
    headingOne.style.display = act;
};

const action1 = () => {
    hideOrUnhide("none")
};

const action2 = () => {
    hideOrUnhide("block")
};


document.getElementById("hide").addEventListener("mouseover", action1);
document.getElementById("unhide").addEventListener("click", action2);
