// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr, string){
    return arr.filter(function (name){
      if(name.toLowerCase() === string.toLowerCase()){return name};
    })
}

function fuzzyMatch(arr, string){
    let lowerString = string.toLowerCase();
    return arr.filter(function (name){
      if (name.toLowerCase().slice(0,2) === lowerString.slice(0,2)){return name}
    })
}

function matchName(obj, string){
    return obj.filter(function (item){
      if(item.name === string){return item}
    })
  }