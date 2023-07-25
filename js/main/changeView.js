import { getState, setState } from "../store/observer.js";
import { gridAllPage, viewOption } from "../store/store.js";
import {
  changeViewOptionToAll,
  changeViewOptionToSub,
  changeViewTypeToList,
  changeViewTypeToGrid,
} from "../eventHandlers.js";

function changeView() {
  const allPress = document.querySelector(".all-press");
  const subPress = document.querySelector(".sub-press");
  const listViewBtn = document.querySelector(".list-view-btn");
  const gridViewBtn = document.querySelector(".grid-view-btn");
  allPress.addEventListener("click", changeViewOptionToAll);
  subPress.addEventListener("click", changeViewOptionToSub);
  listViewBtn.addEventListener("click", () =>
    changeViewTypeToList(listViewBtn, gridViewBtn)
  );
  gridViewBtn.addEventListener("click", () =>
    changeViewTypeToGrid(listViewBtn, gridViewBtn)
  );
}

function changeViewOption() {
  const allPress = document.querySelector(".all-press span");
  const subPress = document.querySelector(".sub-press span");
  if (getState(viewOption) === "all") {
    allPress.classList.replace("unclicked-press", "clicked-press");
    subPress.classList.replace("clicked-press", "unclicked-press");
    setState(gridAllPage, 1);
  } else if (getState(viewOption) === "sub") {
    subPress.classList.replace("unclicked-press", "clicked-press");
    allPress.classList.replace("clicked-press", "unclicked-press");
    setState(gridAllPage, 1);
  }
}

export { changeView, changeViewOption };
