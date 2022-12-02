// create menu object
const menu = {
    _meal : '',
    _price: 0,

    set meal(mealToCheck){
      if (typeof mealToCheck === 'string'){
        this._meal = mealToCheck;
      } else {
        console.log('Invalid meal.');
      }
    },

    set price(priceToCheck){
      if (typeof priceToCheck === 'number'){
        this._price = priceToCheck;
      } else {
        console.log('Invalid price.');
      }
    },

    get todaysSpecial(){
      if (this._meal && this._price){
        return `Today's Special is ${this._meal} for \$${this._price}!`
      } else {
        return 'Meal or price was not set correctly!'
      }
    }
};
  
menu.meal = 'cake';
menu.price = 3;

console.log(menu.todaysSpecial);
  