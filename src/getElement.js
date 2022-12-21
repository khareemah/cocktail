function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`the selector ${selector} is not a valid class name`);
}

export default getElement;
