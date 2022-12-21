import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";
function displayDrinks({ drinks }) {
  const sectionCenter = getElement(".section-center");
  const title = getElement(".title");
  if (drinks == null) {
    hideLoading();
    title.textContent = "sorry no drink matched your search";
    sectionCenter.textContent = "";
    return;
  }
  const drinksList = drinks
    .map((drink) => {
      const { strDrink: name, idDrinks: id, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  title.textContent = "";
  sectionCenter.innerHTML = drinksList;
  hideLoading();
}

export default displayDrinks;
