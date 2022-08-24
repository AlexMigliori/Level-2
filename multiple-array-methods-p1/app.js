var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortByAge(arr){
    arr.sort(function(a, b){
        let ageA = a.lastName.toLowerCase()
        let ageB = b.lastName.toLowerCase()
        if (ageA < ageB) 
            return -1
        if (ageA > ageB)
            return 1
        return 0    
        
    })
    let personList = arr.map(function(person){
        let nameFirst = person.firstName
        let nameLast = person.lastName
        let age = person.age
        let ageName = `<li>${nameFirst} ${nameLast} is ${age}<li>`
        return ageName
    })

    return personList
}

console.log(sortByAge(peopleArray));