// union type

function addNumberOrString(a: any, b: any){
    if(typeof a ==='number' && typeof b==='number'){
        return a+b;
    }
    if(typeof a ==="string"  && typeof b=== "string"){
        return a.concat(b);
    }
    throw new Error("Parameters must be numbers or strings");
}
console.log(">>> check: ", addNumberOrString("quoc ","huu"));