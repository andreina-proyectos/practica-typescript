"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = require("./Main");
console.log("ready andre!");
let agendaContainer = document.querySelector("agenda-container");
const peopleList = Main_1.toShowPeopleList();
console.log("peopleList ==>", peopleList);
agendaContainer === null || agendaContainer === void 0 ? void 0 : agendaContainer.innerHTML("blabla");
