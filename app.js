// // console.log(__dirname, __filename);
// //
// const helper = require("./helper");
// // const sec_helper = require("./sec_helper");

// function callBackFunc(func) {
//   func();
//   console.log(helper.user("Noor"));
//   console.log(helper.email("noorulislam770@gmail.com"));
//   console.log(helper.id("239"));
//   //   console.log(sec_helper("datadog"));
// }

// let red = function () {
//   console.log("hi there ");
// };

// callBackFunc(red);

const events = require("events");
const util = require("util");

const myEmmitter = new events.EventEmitter();

myEmmitter.on("test", function (arg) {
  console.log(arg);
});

const team = function (name) {
  this.name = name;
};

util.inherits(team, events.EventEmitter);
const Arsenal = new team("Arsenal");
const Juventus = new team("Juventus");
const Galatasery = new team("Galatasery");

const teamArray = [Arsenal, Juventus, Galatasery];

teamArray.forEach((team) => {
  team.on("nation", function (nation) {
    console.log(team.name + " is " + nation + " football club");
  });
});

Arsenal.emit("nation", "English");
Arsenal.emit("nation", "Italian");
Arsenal.emit("nation", "Turkish");

// myEmmitter.emit("test", "hello world");
