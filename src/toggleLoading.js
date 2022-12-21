import getElement from "./getElement.js";

const loading = getElement(".loading");
function showLoading() {
  loading.classList.remove("hide-loading");
}

function hideLoading() {
  loading.classList.add("hide-loading");
}

export { showLoading, hideLoading };
