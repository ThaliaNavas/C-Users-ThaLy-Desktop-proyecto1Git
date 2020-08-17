import { Person } from "./person";
import { Calendar } from "./calendar"

var calendario = new Calendar();

calendario.people.push(new Person("Jose",2001,"Bilbao"));
calendario.people.push(new Person("Daniela",2003,"Barcelo"));
calendario.people.push(new Person("Juan",2005,"Valencia"));

calendario.printCalendar();