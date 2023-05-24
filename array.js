//checking - array or not:
// function bigNameFriend(firnds) {
//   if (Array.isArray(firnds) == false) {
//     return 'Please Provide a valid array'
//   }
//   let mega = [];
//   for (const friend of firnds) {

//     if (friend.length > mega.length) {
//       mega = friend;
//     }
//   }
//   return mega;
// }

// const friendsName = ['mahmuda', 'jayed', 'summonrahman',
// 'adiba', 'arman'];    //ans. array
// const friendsName = 'alaiaia';  //ans. not array
// console.log(bigNameFriend (friendsName));


// // finding person:
// const friendsName = ['mahmuda', 'jayed', 'summonrahman',
// 'adiba', 'arman'];

// // rule-1- use indexOf
// if (friendsName.indexOf('jayed') != -1) {
//   console.log('hablu exist');
// }
// else {
//   console.log('hablu not exist');
// }

// // rule-2-a- use includes
//  if (friendsName.includes ('Adiba')) {
//   console.log('This is perosn is exist');
// }


// // rule-2-b- use includes
// const finding = 'Adiba';
  
// const output = []
// for (const friends of friendsName){
// if (friends.toLowerCase().includes(finding.toLowerCase()))
// {
// output.push(friends)
// }
// }
// console.log(output);


// // array sizing:
// const first = [1, 7, 2, 3];
// const second = [4, 5, 6, 9];
// const combined = first.concat(second);
// console.log(combined);

// const numbers = [1, 7, 2, 3, 5, 6, 9, 12, 4, 18]

// const numberSlice = numbers.slice(4, 8)   // 4th, 8th
// console.log(numberSlice);

// const numberSplice = numbers.splice  (4, 3);  // 4th, 3no from 4
// console.log(numberSplice);


// // array arranging in number:
// const numbers = [1, 7, 8, 2, 3, 4, 5, 6, 9];
// const numberSort = numbers.sort();
// console.log(numberSort);

// const numberall = [14, 77, 11, 32, 93, 44, 75, 86, 99,];
// const bigNuberSort = numberall.sort();
// console.log(bigNuberSort);


// // array arranging in string:
// const friendsName = ['mahmuda', 'jayed', 'abdullah', 'summonrahman', 'adiba', 'xiomi', 'arman'];

// const stringArraySort = friendsName.sort();
// console.log(stringArraySort); 

// const reverse = friendsName.reverse();
// console.log(reverse); 



