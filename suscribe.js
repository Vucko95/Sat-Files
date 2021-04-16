var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");
modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});
modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

function validator(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;

  console.log("email", email);

  if (!email) {
    return;
  }

  modalBg.classList.remove("bg-active");
}
