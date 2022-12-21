import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
import getElement from "./getElement.js";

const input = getElement("[name=drink");
const form = getElement(".search-form");

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
form.addEventListener("keyup", async function (e) {
  e.preventDefault();
  const value = input.value;
  if (value) {
    const data = await fetchDrinks(`${baseURL}${value}`);
    console.log(data);
    displayDrinks(data);
  } else {
    return;
  }
});
