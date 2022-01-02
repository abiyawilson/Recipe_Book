export class Recipe {
  public name;
  public author;
  public email;
  public description;
  public image;
  public ingredients;
  public procedure;

  constructor(
    name: string,
    author: string,
    email: string,
    description: string,
    image: string,
    ingredients: string[],
    procedure: string[]
  ) {
    this.name = name;
    this.author = author;
    this.email = email
    this.description = description;
    this.image = image;
    this.ingredients = ingredients;
    this.procedure = procedure;
  }
}
