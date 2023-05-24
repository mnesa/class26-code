const products = [
  'Lenovo core i5 laptop',
  'Lg 11 max pro phone ',
  'super fast laptop lg',
  'Lenovo thinkpad with smart slim laptop',
  'my Laptop is Dell'
]
  
const searchign = 'lg';  //01-rule-dell, 02-rule-lenovo
  
const output = []
  

//searching-rule-01
// for (const product of products){
// if (product.toLowerCase().indexOf(searchign.toLowerCase())
// != -1) {
// output.push(product)
// }
// }

//searching-rule-02
//for (const product of products){
//if (product.toLowerCase().includes(searchign.toLowerCase()))
//{
//output.push(product)
//}
//}
  
//searching-rule-03-start
//for (const product of products) {
//if(product.toLowerCase().startsWith(searchign.toLowerCase
//())) {
//output.push(product)
//}
//}

//searching-rule-04-end
// for (const product of products) {
// if(product.toLowerCase().endsWith(searchign.toLowerCase())) {
// }
// output.push(product)
// }

console.log(output);
  