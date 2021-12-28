export class Recipe {
  public name;
  public description;
  public image;
  public ingredients;
  public procedure;

  constructor(
    name: string,
    description: string,
    image: string,
    ingredients: string[],
    procedure: string[]
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.ingredients = ingredients;
    this.procedure = procedure;
  }
}
