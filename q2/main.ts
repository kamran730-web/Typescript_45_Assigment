let userName:string = "MuhaMMAD KAMRAN"
let lower:string = userName.toLowerCase()
let upper:string = userName.toUpperCase()
let titalCase:string= userName.split(" ").map((e)=>(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())).join(" ")
console.log(titalCase);



