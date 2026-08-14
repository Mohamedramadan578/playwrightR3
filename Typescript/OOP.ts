class People{
getHumanSize(){
    console.log(this.getHumanSize)
}


}
 class Women extends People{

 }

 let men =new People();
 let childern=new Women();
 men .getHumanSize();
 childern.getHumanSize();
 

 class animal {

    private animalSize =5;
    constructor(objectAnimalSize:number){
this.animalSize=objectAnimalSize;
    }

static animalName="animal"
    public getAnimalSize(){
        console.log(this.animalSize)
    }
    public setAnimalSize(newAnimalSize:number){
        this.animalSize=newAnimalSize;
    }
    static getAnimalNme(){
    return this.animalName;
    }
 }
 class cat extends animal{

 }
 let dog=new animal(3);
 let meo =new cat(5);
 dog.getAnimalSize()
 meo.setAnimalSize(7)
 console.log (animal.getAnimalNme())