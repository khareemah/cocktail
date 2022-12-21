const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
import showDrinks from "./src/showDrinks.js";

window.addEventListener("DOMContentLoaded", function () {
  showDrinks(url);
});
