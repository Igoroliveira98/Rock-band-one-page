let openModalOne = document.querySelector("#open-modal-one");
let openModalTwo = document.querySelector("#open-modal-two");
let openModalTree = document.querySelector("#open-modal-tree");
let modal = document.querySelector("#myModal");
let close = document.querySelector(".close");

openModalOne.addEventListener("click", e => {
    e.preventDefault();

    modal.style.display = "block";
});

openModalTwo.addEventListener("click", e => {
    e.preventDefault();

    modal.style.display = "block";
});

openModalTree.addEventListener("click", e => {
    e.preventDefault();

    modal.style.display = "block";
});

close.addEventListener("click", e => {
    e.preventDefault();

    modal.style.display = "none";
});