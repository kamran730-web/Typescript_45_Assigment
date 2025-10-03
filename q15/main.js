"use strict";
let guestList = ["Kamran", "Zaryab", "Ahsan"];
let message = "You are invited to Dinner";
for (let i = 0; i < guestList.length; i++) {
    console.log(`Mr,${guestList[i]} ${message}`);
}
let absentGuest = "Kamran";
console.log(`\nNote:\nMr, ${absentGuest} is not here   \n`);
let newGuest = "Khalid";
guestList[0] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log(`Mr,${guestList[i]} ${message}`);
}
console.log("\nWe found a bigger dinner table");
let nameGuest1 = guestList.unshift("Abrar Ahmed");
let nameGuest2 = guestList.splice(2, 0, "Babar Azam");
let nameGuest3 = guestList.push("Shabzada Farhan");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Mr,${guestList[i]} ${message}`);
}
