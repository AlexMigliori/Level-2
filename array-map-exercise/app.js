
function doubleNumbers(arr){
    let double = arr.map(num => num * 2);
    return double

  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


  function stringItUp(arr){
    let numString = arr.map(num => String(num))
    return numString
    
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  

  function capitalizeNames(arr){
    let newNames = arr.map(function(name){
        let firstLetter = name.slice(0, 1);
        let letters = name.slice(1);
        let lowerLetter = letters.toLowerCase();
        let bigFirst = firstLetter.toUpperCase();
        let allNames = bigFirst + lowerLetter;
    return allNames
    })
    return newNames
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  
  function namesOnly(arr){
    let getNames = arr.map(function(people){
        let pullName = people.name
        return pullName
    })
    return getNames
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
  function makeStrings(arr){
    let inMatrix = arr.map(function(person){
        let names = person.name;
        let ages = person.age;
        if(ages >= 18){
            return `${names} is old enough to watch Matrix`
        } else{
            return `${names} is not old enough`
        }
    })
    return inMatrix;
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  

  function readyToPutInTheDOM(arr){
    let headers = arr.map(function(pHead){
        let nameHeader = pHead.name;
        let ageHeader = pHead.age;
        return `<h1>${nameHeader}</h1> <h2>${ageHeader}</h2>`
    })
    return headers;
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]