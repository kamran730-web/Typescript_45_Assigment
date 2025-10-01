"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName = "MuhaMMAD KAMRAN AMD krlhrJgKGvhJFjcvnVB";
let lower = userName.toLowerCase();
let upper = userName.toUpperCase();
let titalCase = userName.split(" ").map((e) => (e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())).join(" ");
console.log(titalCase);
// let userName = "Kamran"
// let pak = userName.slice(1)
// console.log(pak);
