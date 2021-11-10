import { Ingredient } from './ingredient.interface';

export interface Cocktail {
  name: String;
  img: String;
  description: String;
  ingredients?: Ingredient[];
}
