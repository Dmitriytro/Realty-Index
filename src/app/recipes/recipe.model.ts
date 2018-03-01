import Ingredient from "../shared/ingredient.model";
export default class Recipe {
  constructor (
    public id: number,
    public name: string,
    public desc: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ){}
}
