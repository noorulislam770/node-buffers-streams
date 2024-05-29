const http = require("http");
const fs = require("fs");

// readable stream

// const readStream = fs.createReadStream(__dirname + "/readme.txt", "utf-8");
// const writeStream = fs.createWriteStream(__dirname + "/write-me1.txt", "utf-8");

// readStream.pipe(writeStream);

// writeable stream
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   const readStream = fs.createReadStream(__dirname + "/readme.txt", "utf-8");
//   readStream.pipe(res);
// });

// serving html
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
//     readStream.pipe(res);
//   });

//   serving a json
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const readStream = fs.createReadStream(__dirname + "/index.html", "utf-8");
    readStream.pipe(res);
  } else if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("welcome to the hello page");
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("sorry the page does not exist");
  }

  // res.writeHead(200, { "Content-Type": "application/json" });

  const person = {
    name: "Noor",
    email: "alix@gmail.com",
    job: "designer",
  };
  //   res.end(JSON.stringify(person));
  //   readStream.pipe(res);
});

server.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
