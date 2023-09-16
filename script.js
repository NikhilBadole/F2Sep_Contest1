const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(let i=0;i<data.length;i++){
    console.log(data[i].name);
  }
}

// 2. Add Data
function addData() {
  // take data from prompt
  const currName = prompt("Enter a name:");
  const currAge = prompt("Enter an age:");
  const Age = parseInt(currAge)
  const currProfession = prompt("Enter a profession:");

  // if no data provided
  if(currName === null || currAge === null || currProfession === null) return;
  if(currName === "" || currAge === "" || currProfession === "") return;

  // create object using given data
  const obj = {name: currName, age: Age, profession: currProfession}
  data.push(obj);
}

// 3. Remove Admins
function removeAdmin() {
  for(let i=0;i<data.length;i++){
    if(data[i].profession === "admin"){
      data.splice(i, 1);
    }
  }
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArr = [123, "String", {name : "Nikhil", age: 26}];  // dummy array

  //concat two array
  const resultArr = data.concat(dummyArr);

  // print resul arr
  for(let i=0;i<resultArr.length;i++){
    console.log(resultArr[i]);
  }
}

// 5. Average Age
function averageAge() {
  let sumOfAge = 0;
  for(let i=0;i<data.length;i++){
    sumOfAge+= data[i].age;
  }
  console.log(sumOfAge/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  let flag = false;
  for(let i=0;i<data.length;i++){
    if(data[i].age > 25){
      flag = true;
      break;
    }
  }
  console.log(flag);
}

// 7. Unique Professions
function uniqueProfessions() {
  // map creation
  let map = new Map();
  for(let i=0;i<data.length;i++){

    // if current profession is not in map
    if(!map.has(data[i].profession)){
      console.log(data[i].profession);
      map.set(data[i].profession,1);  // adding to map
    }
  }
}

// 8. Sort by Age
function sortByAge() {
  data.sort(function(a, b){return a.age - b.age});
  for(let i=0;i<data.length;i++){
    console.log(data[i].name);
  }
}

// 9. Update Profession
function updateJohnsProfession() {
  for(let i=0;i<data.length;i++){
    if(data[i].name === "john") data[i].profession = "manager";
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let developerCount = 0;
  let adminCount = 0;
  for(let i=0;i<data.length;i++){
    
    // if it is developer
    if(data[i].profession === "developer"){
      developerCount++;
    }

    // if it is admin
    if(data[i].profession === "admin"){
      adminCount++;
    }
  }

  console.log("Total number of Developer: " + developerCount);
  console.log("Total number of Admin: " + adminCount);
}
