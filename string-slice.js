const anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';

const words = anthem.split();  //.split('' = every word break);('a'= every a is break point)
// console.log(words);

const slice = anthem.slice(5, 10);  //ans.Sonar // 5th, 10th
// console.log(slice);

const substr = anthem.substr(11, 8); //ans.Bangla A //11th 8
// console.log(substr);

const substring = anthem.substring(11, 15); //ans.Bang  //11th 15th
// console.log(substring); 



// //join-rule
const first = 'Amader';
const second = 'Dahaka';
// const full = first + second
const fullString = first.concat(second).concat('City').concat('New Market');
//console.log(fullString);

const word2 = ['mahmuda', 'jayed', 'summon', 'adiba', 'arman'];
const allJoined = word2.join(' www.')    //1 ('') 2(',') 3(' www.') 
console.log(allJoined);
