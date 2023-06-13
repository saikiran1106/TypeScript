class users {

    addUser (user : string)
    {
        return `${user} is added as an user`
    }

   


  changeuser (user : string) {
    return `${user} name is changed`
  }

   delete ( user : string)
  {
    return` ${user} name is deleted`
  } 
}

class del extends users {

}


const u1 = new del(); // creates & holds a new object

console.log(u1.addUser('sai'))

