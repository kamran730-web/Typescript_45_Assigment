let guestList:string[] = ["Kamran","Zaryab","Ahsan"]
let message:string = "You are invited to Dinner"
for(let i=0;i<guestList.length;i++){
    console.log(`Mr,${guestList[i]} ${message}`);
}

let absentGuest:string = "Kamran"
console.log(`\nNote:\nMr, ${absentGuest} is not here   \n`);

let newGuest:string = "Khalid"
guestList[0] = newGuest

for(let i=0;i<guestList.length;i++){
    console.log(`Mr,${guestList[i]} ${message}`);
}


