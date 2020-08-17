class Library
{
    private books : Book[];
    private address : string;
    private manager : string;

    constructor (books:Book[] , address:string, manager:string)
    {
         this.books= books;
         this.address= address;
         this.manager= manager;
    }
    public getAddress():string {
        return this.address
    }
    public setAddress(title:string ){
        this.address= this.address ;
    }
    public getManager():string {
        return this.manager
    }
     public setManager(manager:string ){
            this.manager= this.manager
     }
     public toString():string{
        return `${this.books} ${this.address}  ${this.manager} ` 
    }
}    

let milibrary:Library = new Library ("Introduccion a Javascript",2344433- BC23333 , "joseph smith", "now editions")

console.log(milibrary.toString())