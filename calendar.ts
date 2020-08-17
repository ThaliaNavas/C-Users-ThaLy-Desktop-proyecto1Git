import { Person } from "./person";
import { persona } from "./person";


export class Calendar
{
    public people: Person[] ;
    
    constructor (){
        this.people= new Array<Person>();
    }

    public printCalendar(){

        for(var i=0;i<this.people.length;i++){

            console.log(this.people[i].ObtenerNombre());
        }

      }
}

var calendario = new Calendar();

calendario.people.push(new Person("Jose",2001,"Bilbao"));
calendario.people.push(new Person("Daniela",2003,"Barcelo"));
calendario.people.push(new Person("Juan",2005,"Valencia"));
calendario.people.push(persona);


calendario.printCalendar();