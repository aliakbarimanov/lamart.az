/* buttons */
const newProButton = document.querySelector("#newProButton");
const cancelPro = document.querySelector("#cancelPro");
const enterPro = document.querySelector("#enterPro");
const edit = document.querySelectorAll(".edit");



/* displays */
const insertForm = document.querySelector("#insertForm");
const editNot = document.querySelector("#editNot");

newProButton.onclick = () => {
    insertForm.style.display = "block";
}

cancelPro.onclick = () => {
    insertForm.style.display = "none";
}

enterPro.onclick = () => {
    insertForm.style.display = "none";
}


edit.onclick = () => {
    editNot.style.display = "block";
}