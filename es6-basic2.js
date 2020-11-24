// keywordl let ==> block code
//keyword var== function code
//keyword const ==> block code
const orange = 12;
let apple = 15;
var Banana = 10;
{
    var Banana = 5; //replace => banana 10
    console.log(Banana + 5); //10 
}
orange = 10;
console.log(orange); //?
console.log(apple);//15