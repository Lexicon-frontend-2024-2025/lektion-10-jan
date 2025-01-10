//var, let och const har olika scope som kan vara lite märkliga
var testVar = "test av var,";
let testLet = "test av let,";
const testConst = "test av const";

function scopeTests() {
  //dessa skriver över innehållet satt i början av dokumentet då de är samma variabel
  testVar = "test av var inuti,";
  testLet = "test av let inuti,";
  if (true) {
    let testLet = "?"; //let här är deklarerat lokalt och används bara inuti funktionen
    var testVar = "??"; //var här kommer deklareras globalt och skriva över den var vi skrev först i dokumentet
    console.log(testVar, testLet, testConst);
  }
  console.log(testVar, testLet, testConst);
}

scopeTests();

// //funktioner som denna är hoisted - de kan deklareras efter de används
// //en funktion kan ta emot argument som parametrar
// //param1 och param2 parametrar
// function myFunction(param1, param2) {
//   console.log("hej " + param1 + " och " + param2);
// }

// //Anna och Otto är argument som skickas med
// myFunction("Anna", "Otto");

// //inte hoisted då är tilldelad som const
// let myFunction2 = function () {
//   console.log("Funktion 2");
// };
// myFunction2();

// myFunction2 = function () {
//   console.log("Funktion 2.5");
// };
// myFunction2();

// //arrow function
// const myFunction3 = (param1) => {
//   console.log("Funktion 3", param1);
// };

// myFunction3("Hej jag är ett argument");
