let guestList:string[] = ["Kamran","Zaryab","Ahsan"]
let message:string = "You are invited to Dinner"
function forloop(){
    for(let i=0;i<guestList.length;i++){
    console.log(`Mr,${guestList[i]} ${message}`);
}
}
forloop()

let absentGuest:string = "Kamran"
console.log(`\nNote:\nMr, ${absentGuest} is not here   \n`);

let newGuest:string = "Khalid"
guestList[0] = newGuest

forloop()

console.log("\nWe found a bigger dinner table");

let nameGuest1 = guestList.unshift("Abrar Ahmed")
let nameGuest2 = guestList.splice(2,0,"Babar Azam")
let nameGuest3 = guestList.push("Shabzada Farhan")
forloop()
// console.log(guestList);

console.log("\nSorry we cannot arrange a  big dinner table.we can only invites toperson.");
while(guestList.length >= 3){
    let removeGuest1 = guestList.pop()
console.log(`Mr,${removeGuest1}.you are not invited to dinner`);
}


for(let i=0;i<guestList.length;i++){
    console.log(`\nMr,${guestList[i]} ${message}`);
}
let removeall = guestList.splice(0,2)
console.log(guestList);

console.log(`you are inviting ${guestList.length} guest.`);







