let selected_tab = "1";
const tabs = document.querySelectorAll("li");
const selector = document.querySelector(".selector-bar");
const tabs_content = document.querySelectorAll(".tab-content");

//functions
function selectTab(e) {
  if (e.type === "click") {
    selector.classList.remove("while-resizing");
    selected_tab = e.target.dataset.tab;
  }
  if (e.type === "resize") {
    selector.classList.add("while-resizing");
  }
  const tab = document.querySelector(`li[data-tab="${selected_tab}"]`);

  const { left, width, top, height } = tab.getBoundingClientRect();
  selector.style.left = `${left}px`;
  selector.style.width = `${width}px`;
  selector.style.top = `${height + top}px`;

  tabs.forEach((tab, index) =>
    selected_tab - 1 === index
      ? tab.classList.add("active")
      : tab.classList.remove("active")
  );
  tabs_content.forEach((item, index) =>
    selected_tab - 1 === index
      ? item.classList.add("show")
      : item.classList.remove("show")
  );
}

//listeners
window.addEventListener("load", selectTab);
window.addEventListener("resize", selectTab);
tabs.forEach(tab => tab.addEventListener("click", selectTab));
