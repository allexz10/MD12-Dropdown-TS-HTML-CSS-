document.querySelectorAll(".dropdown").forEach((dropDownWrapper) => {
  const dropdownButton = dropDownWrapper.querySelector(".dropdown__button") as HTMLElement;
  const dropdownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropdownListItems = dropdownList.querySelectorAll(".dropdown__list--item");

  const closeDropdownList = () => {
    dropdownList.classList.remove("js-visible");
    dropdownButton.classList.remove("js-active");
  };

  dropdownButton.addEventListener("click", () => {
    dropdownList.classList.toggle("js-visible");
    dropdownButton.classList.toggle("js-active");
    dropdownButton.innerText = "Pick one";
    dropdownListItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        dropdownListItems.forEach((el) => {
          el.classList.remove("checked");
        });
        item.classList.add("checked");
        dropdownButton.innerText = this.innerText;
      });
    });
  });

  dropdownListItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownButton.focus();
      setTimeout(() => {
        closeDropdownList();
      }, 80);
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target !== dropdownButton) {
      closeDropdownList();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" || e.key === "Tab") {
      closeDropdownList();
    }
  });
});
