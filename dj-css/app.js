localStorage.setItem("name", "rob")
localStorage.setItem("age", "63")


const name = localStorage.getItem("name")

console.log(name)

const arr = [1, 2, 3, 4, 5]

const result = arr.map(function(num){
    return num + 10
})

const movies = [
    {title: "movie1", genre: "comedy"},
    {title: "movie2", genre: "action"},
    {title: "movie3", genre: "fantasy"},
    {title: "movie4", genre: "comedy"},

]

const funnyMovies = movies.filter(movies => movies.genre === "comedy")

console.log(funnyMovies)


const arr1 = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

arr.sort((a, b) => a - b)

console.log(arr1)



const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]

const voterOpt = voters.reduce(function(final, voters){
    if(voters.voted){
        final.didVote++
    }else{
        final.didntVote++
    } 
    return final
    
}, {didVote: 0, didntVote: 0})