class Book 
{
    private title : string;
    private npages : number ;
    private issn: string;
    private author: string;
    private editorial : string ;

    constructor (title:string , npages:number, issn:string, author:string,editorial:string)
    {
         this.title= title;
         this.npages= npages;
         this.issn= issn;
         this.author= author; 
         this.editorial= editorial;

    }
      public getTitle():string {
          return this.title
      }
      public getNpages(): number {
          return this.npages

      }
      public getIssn():string {
          return this.issn
      }
       public getAuthor(): string{
           return this.author
       }
       public getEditorial(): string{
           return this.editorial
       }
        public setTitle(title:string){
            this.title= title ;  
        }
        public setNpages(npages:number){
            this.npages=npages;
        }
        public setIssn(issn:string){
            this.issn=issn;
        }
        public setAuthor(author:string){
            this.author=author
        }
        public setEditorial(editorial:string){
            this.editorial=editorial
        }

        public toString():string{
            return `El titulo es ${this.title} \n Número de páginas: ${this.npages} \n ${this.issn} \n ${this.author} \n ${this.editorial}` 
        }
}

let miTitulo:Book = new Book ("Introduccion a Javascript",233,"2344433-BC23333", "joseph smith", "now editions")

console.log(miTitulo.toString())




