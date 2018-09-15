export class Recipe {
  //model is a blueprint for objects we create
    public name: string;
    public description: string;
    public imagePath: string;
  
    constructor(name: string, desc: string, imagePath: string) {
      //built in function will be executed once you create a new instance of this class
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
    }
  }
  