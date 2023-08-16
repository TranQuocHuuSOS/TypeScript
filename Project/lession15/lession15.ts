// data type never
function handleException(errorMessage:string): never{
    throw Error(errorMessage)
}
function runInfinity():never{
    console.log(">>> run inside runInifity")
    while(true){
        // console.log("running ...")
    }
    console.log(">>> run inside runInifity")
}
// handleException("just a test error")

let a =runInfinity();
console.log(" >>> check a :", a)