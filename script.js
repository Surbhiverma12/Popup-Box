let submit = document.querySelector(".btn");
let ok = document.querySelector(".ok");
let popup = document.querySelector(".popup");

submit.addEventListener("click", () => {
    openPopup();
});

ok.addEventListener("click", () => {
    closePopup();
});

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}