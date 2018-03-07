import Ingredient from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

const initialState = {
  ingredients: [
    new Ingredient('apples',5),
    new Ingredient('tomatoes',2)
  ]
};


export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListIngredient) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients,action.payload]
      };
    default: return state
  }
}
