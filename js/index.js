const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

/* const removeBorder = (ItemsDeLaLista) => {
  ItemsDeLaLista.foreach((item) => {
    item.classList.remove("tab-border");
  });
};

const selectItem = (tabItems) => {
  removeBorder(tabItems);
  this.classList.add("tab-border");
};

tabItems.array.foreach((item) => {
  item.addEventListener("click", selectItem(tabItems));
});
 */
/* function removeShow(){
  tabItems.forEach((item) => item.classList.remove("show"));
} */
/* function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
} */
//select tab content item
function selectItem(e) {
  //removeShow()
  //removeBorder();
  tabItems.forEach((item) => item.classList.remove("tab-border"));
  tabContentItems.forEach((item) => item.classList.remove("show"));

  //add border to current tab
  this.classList.add("tab-border");
  //capturar item del dom
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //agregar la clase show
  tabContentItem.classList.add("show");
}

//Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));
