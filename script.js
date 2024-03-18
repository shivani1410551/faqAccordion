let toggleBtn = document.querySelectorAll(".toggle");
let content = document.querySelectorAll(".content");
let icon = document.querySelectorAll("i");
console.log(icon);

toggleBtn.forEach((btn, i) => {
  console.log(i);
  btn.addEventListener("click", () => {
    if (parseInt(content[i].style.height) !== content[i].scrollHeight) {
      content[i].style.height = parseInt(content[i].scrollHeight) + "px";
      toggleBtn[i].style.color = "deeppink";
      icon[i].classList.remove("fa-plus");
      icon[i].classList.add("fa-minus");
    } else {
      icon[i].classList.remove("fa-minus");
      icon[i].classList.add("fa-plus");
      toggleBtn[i].style.color = "#000";
      content[i].style.height = "0px";
    }
  });
});
