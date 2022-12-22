import fetchDrinks from "./src/fetchDrinks.js";
import getElement from "./src/getElement.js";
import { hideLoading } from "./src/toggleLoading.js";
let params = new URL(document.location).searchParams;
let id = params.get("id");

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
if (id) {
  const data = await fetchDrinks(`${baseURL}${id}`);
  const drink = data.drinks[0];
  console.log(drink);
  const { strDrink: name, strDrinkThumb: image, strInstructions: desc } = drink;
  console.log(name, image, desc);
  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const ingredientsList = ingredients
    .map((ingredient) => {
      if (!ingredient) {
        return;
      }
      return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
    })
    .join("");
  const singleDrink = getElement(".single-drink");
  singleDrink.innerHTML = ` <img src="${image}" class="drink-img" alt=${name} />
        <article class="drink-info">
            <h2 class="drink-name">${name}</h2>
            <p class="drink-desc">${desc}</p>
            <ul class="drink-ingredients">
            ${ingredientsList}
            </ul>
            <a href="index.html" class="btn">all cocktails</a>
        </article>`;
  hideLoading();
} else {
  window.location.replace("index.html");
}
