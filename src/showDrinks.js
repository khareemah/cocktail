import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
async function showDrinks(url) {
  const data = await fetchDrinks(url);
  displayDrinks(data);
}

export default showDrinks;
