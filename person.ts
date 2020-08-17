export class Person 
{
    public name : string;
    public age : number ;
    private address: string;

    constructor (name:string , age:number, address:string)
    {
         this.name= name
         this.age= age
         this.address = address;

    }
     public ObtenerNombre(): string {
         return this.name;
        
        }

         

}

export let persona = new Person ("maria", 45, "calle logroño "); 

let persona1 = new Person ("pedro", 50, "calle lopez de hoyos "); 

let persona2 = new Person ("lucia", 24, "calle hoyos "); 


//console.log(persona.ObtenerNombre())


