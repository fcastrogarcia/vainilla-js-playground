let selected_tab = "1";
const tabs = document.querySelectorAll("li");
const selector = document.querySelector(".selector-bar");
const tabs_content = document.querySelectorAll(".tab-content");

//functions
function selectTab(e) {
  if (e.type === "click") {
    selector.classList.remove("while-resizing");
    tabs.forEach(tab => tab.classList.remove("active"));
    tabs_content.forEach(tab => tab.classList.remove("show"));
    selected_tab = e.target.dataset.tab;
  }
  if (e.type === "resize") {
    selector.classList.add("while-resizing");
  }
  const tab = document.querySelector(`li[data-tab="${selected_tab}"]`);
  const tab_content = document.querySelector(
    `.tab-content[data-tab="${selected_tab}"]`
  );

  const { left, width, top, height } = tab.getBoundingClientRect();
  selector.style.left = `${left}px`;
  selector.style.width = `${width}px`;
  selector.style.top = `${height + top}px`;
  tab.classList.add("active");
  tab_content.classList.add("show");
}

//listeners
window.addEventListener("load", selectTab);
window.addEventListener("resize", selectTab);
tabs.forEach(tab => tab.addEventListener("click", selectTab));
