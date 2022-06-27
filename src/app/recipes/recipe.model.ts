export class Recipe {
    public recipeName: String;
    public recipeDescription: String;
    public recipeImage: String;

    constructor(name: string, desc: string, imagePath: string) {
        this.recipeName = name;
        this.recipeDescription = desc;
        this.recipeImage = imagePath;
    }
}