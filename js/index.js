let currentTab = document.querySelector(".current");

currentTab.addEventListener("click", () => {
  currentTab.querySelector(".hidden-content").classList.toggle("open");
});
