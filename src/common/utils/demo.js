function demo(a,b,c){
    a = a+2;
    b.def = '123'
    c = {dd:22}
}
var a = 10;
var b = {def:111}
var c = {dd:11}
demo(a,b,c)
console.log(a)
console.log(b)
console.log(c)

console.log(parseInt('7b',16))

let arr = [1,2,4,6,7,8,8,9,9,9,4]

let set = new Set();
for(let i=0;i<arr.length;i++){
    set.add(arr[i])
}
console.log(set)