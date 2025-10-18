// Global scope
var globalVar = "I am a global variable";
let globalLet = "I am also global, but scoped with let";
const globalConst = "I am a global constant";

{
    // Block scope
    var blockVar = "I am a block scoped var";
    let blockLet = "I am a block scoped let";
    const blockConst = "I am a block scoped constant";
}

// Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Block scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I am a block scoped var";
    let functionLet = "I am a block scoped let";
    const functionConst = "I am a block scoped const";
}

show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);