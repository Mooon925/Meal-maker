const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};
const mealOptions = ["curry", "pizza", "lasagna", "toastie"];
menu.meal = mealOptions[Math.floor(Math.random() * mealOptions.length)];

let mealPrice = () => {
  if (menu.meal === "pizza") {
    return (mealPrice = 3.5);
  } else {
    return (mealPrice = 2.5);
  }
};
menu.price = mealPrice();
console.log(menu.todaysSpecial);