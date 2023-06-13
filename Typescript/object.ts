let students : object  = {
    name : 'arjun',
    course : 'mbbs',
    age: 22 ,
    location : ' hyderabad ',
    score : '90%'
}

function story( students : object){

    console.log("A student named " + students.name +  " percieving course in " + students.course  + " & his age is " + students.age  + " he also from " +  students.location  + " & his overall academic score is " + students.score)
}

story(students)

export{}