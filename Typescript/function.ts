function addThree(num:number , num2:number){
    return num + num2
}

function user(name: string , age: number, mail: string){
    console.log(name)
    console.log(age)
    console.log(mail)
}

let details = (name:string , member:boolean): string   => {
    
    
    console.log('his name is' +  name  +  'he is a'  +  member  + 'commitee member')

    return ''
}

const heros = ['batman', 'ironman' , 'spiderman']

heros.map(hero =>{
    return 'hero is ${hero}'
})



function create():{ name: string , age: number} {

return{
    name: 'vinay',
    age: 22
}
}

let name1 : any = 'akshaya'

name1 = 2


console.log(addThree(50,30))

user('hari',50, 'har@gmail.com')
details('hari', true)