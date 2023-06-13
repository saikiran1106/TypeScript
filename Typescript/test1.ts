class exam {

    subject : string;
    name : string;
    marks : number ;

    constructor (subject : string , marks:number , name : string){
        this.subject = subject;
        this.marks = marks ;
        this.name = name;
    }

    print() : void {

        console.log(' my name is ' + this.name + ' im studying 10th class & My marks in ' +  this.subject  + ' ' + this.marks )

    }

   
}

const stud2 = new exam('physics' , 75 , 'stalin')

stud2.print()


const stud = new exam('maths', 75 , 'stalin')

stud.print()

