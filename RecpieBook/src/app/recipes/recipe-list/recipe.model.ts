export class Recipe {
  public name;
  public author;
  public description;
  public image;
  public ingredients;
  public procedure;

  constructor(
    name: string,
    author: string,
    description: string,
    image: string,
    ingredients: string[],
    procedure: string[]
  ) {
    this.name = name;
    this.author = author;
    this.description = description;
    this.image = image;
    this.ingredients = ingredients;
    this.procedure = procedure;
  }
}
