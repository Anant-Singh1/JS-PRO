const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelector(".close-modal");
const btnopenModal = document.querySelectorAll(".show-modal");
for (let i = 0; i < btnopenModal.length; i++) {
  // const element = btnopenModal[i];
  // console.log(btnopenModal[i].textContent);
  btnopenModal[i].addEventListener("click", () => {
    // console.log(`Button clicked-${btnopenModal}`);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
btncloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
// console.log(btnopenModal);
document.addEventListener("key");
