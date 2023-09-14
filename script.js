
//    1-misol
// function filter(arr, a, b) {
//     return arr.filter(val => (a <= val && val <= b));
//   }
//   let arr = [5, 3, 8, 1];
//   let filtered = filter(arr, 3, 4);
//   console.log( filtered );
//   console.log( arr );

// /////////////////////////////////////////////////////

//   function filter2(arr2, a2, b2) {
//     for (let i = 0; i < arr2.length; i++) {
//       if(a2 <= arr2[i] && b2 >= arr2[i]){
//         return  arr2[i];
//       }
      
//     }
//   }
//   let arr2 = [5, 3, 8, 1];
//   let filtered2 = filter2(arr2, 3, 4);
//   console.log( [filtered2] );
//   console.log( arr2 );


//    2-misol


// function camelize(str) {
//   return str
//     .split('-') 
//     .map(
//       (str, i) => i == 0 ? str : str[0].toUpperCase() + str.slice(1)
//     )
//     .join(''); 
// }
// let result = camelize('salom-oybek');
// console.log(result);



//    3-misol
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < a || arr[i] > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
//   }
//   let arr = [5, 3, 8, 1];
//   filterRangeInPlace(arr, 5, 9);
//   console.log( arr ); 


//    4-misol
// let arr = [5, 2, 1, -10, 8];
// arr.sort(function(a, b){
// return b - a;
// });
// console.log(arr); 


//    5-misol
// function copySorted(arr) {
//     return arr.slice().sort();
//   }
  
//   let arr = ["HTML", "JavaScript", "CSS"];
  
//   let sorted = copySorted(arr);
  
//   console.log( sorted );
//   console.log( arr );





// 1-misol
// let a = Number(prompt('a sonini kiritng'));
// let op = String(prompt('amalni kiriting'));
// let b = Number(prompt('b sonini kiritng'));
 
//   if(op == '+'){
//     let result = a + b;
//     console.log( result);
//   }
//   else if(op == '-'){
//     let result = a - b;
//     console.log( result);
//   }
//   else if(op == '*'){
//     let result = a * b;
//     console.log( result);
//   }
//   else if(op == '/'){
//     let result = a / b;
//     console.log( result);
//   }
//   else if(op == '**'){
//     let result = a ** b;
//     console.log( result);
//   }
//   else{console.log('xato kiritdingiz!');}



// 2-misol
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name);

// console.log( names );



// 3-misol
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// console.log( usersMapped[0].id );
// console.log( usersMapped[0].fullName );



// 4-misol

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);




// 5-misol
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];
// shuffle(arr);
// console.log(arr);


// 6-misol

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); 



// 7-misol
// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// let strings = ["Oybek","Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); 



// 8-misol


// function groupById(arr) {
//   return arr.reduce((acc, user) => {
//     acc[user.id] = user;
//     return acc;
//   }, {});
// }

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// console.log(usersById);



// let soz = prompt('soz kiriting');
// let i = 0;
// for(i = 0 ; i < soz.length ; i++){
//   if(soz[i] == '-'){
//     soz.split(soz.str(i,2));
//   }
// }



// function mapBully(someMap){
//   if (someMap.hasOwnProperty("a")) {
// someMap["b"] = someMap["a"];
// someMap["a"] = '';
// }
// return someMap;
// }

// let result = mapBully({'a': 'sparkle', 'c': 'meh'});
// console.log(result);

// function topping2(map) {
//   if (map.has('ice cream')) {
//     const valueIceCream = map.get('ice cream');
//     map.set('yogurt', valueIceCream);
//   }
//   if (map.has('spinach')) {
//     map.set('spinach', 'nuts');
//   }
//   return map;
// }

// console.log(topping2(new Map([['ice cream', 'cherry']])));
// console.log(topping2(new Map([['spinach', 'dirt'], ['ice cream', 'cherry']])));
// console.log(topping2(new Map([['yogurt', 'salt']])));

