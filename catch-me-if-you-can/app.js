function sum(x, y){
    try{
        if (x !== Number) {
            throw typeof(x)  
        }
        if (y !== Number) {
            throw typeof(y)
        }

    }catch (err){
        console.log(err)
    }finally{
        console.log("It's broken")
    }

    return x + y;
  }
console.log(sum(1, 2))

try{
    function sum(x, y){
        return x + y;
    }
    throw sum(1, 2)
} catch(err){
    console.log(err)
} finally{
    console.log(sum)
}


  var user = {username: "sam", password: "123abc"};
function login(username, password){
  if (username === "sam" && password === "123abc") {
    console.log("login successful")
  }
}

try{
    function login(username, password){
        if(username === "sam" && password === "123abc"){
            throw "login successful"
        }
        if(username !== "sam" && password !== "123abc"){
            throw "not succesful"
        }
}} catch(err){
    console.log(err)
} finally{
    console.log("login tried")
}
console.log(login("sam", "123abc"))
console.log(login("jeff", "122"))
