// const app = require("express")();
// const port = 8000;
// app.listen(port);

// //!ex1-5)
// app.get("/", (req, res) => {
//   res.send("Welcome To The First EXPRESS SERVER");
// });

// //!ex6)
// app.get("/test", (req, res) => {
//   res.send("Test Route - Successfully!");
// });

// //!ex7)

// app.get("/names", (req, res) => {
//   let arr = ["Leo", "Andreas", "Xavi", "Busquets", "Ronaldinho"];
//   res.send(arr);
// });

// //!ex8//9)

// let arr = [];
// app.get("/rndNumbers", (req, res) => {
//   for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100));
//   }
//   res.send(`${Math.max(...arr)}`);
// });

// //!ex10)

// app.get("/numbers/:index", (req, res) => {
//   for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100));
//   }
//   res.send(`${arr[req.params.index]}`);
// });

// //!ex11)

// app.get("/isNumber/:num", (req, res) => {
//   for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 10));
//   }
//   console.log(arr);
//   let urlNum = req.params.num;
//   if (arr.includes(urlNum)) {
//     return res.send("There is Num in Array");
//   }
//   res.send("NO Num in Array" + urlNum);
// });

//!ex12)

//!--------------------------->>
//!RE-Exercising Weekend ! : )
//!--------------------------->>

//!EX 1)

const app = require("express")();
const port = 1111;
app.listen(port);

app.get("/", (req, res) => {
  res.send("HELLO USER , WELL-come");
});
//!EX 2)
app.get("/rndNumbers", (req, res) => {
  let arrOfRnd = [];
  for (let i = 0; i < 10; i++) {
    arrOfRnd.push(Math.floor(Math.random() * 999));
  }
  console.log(arrOfRnd);
  let maxnum = Math.max(...arrOfRnd);
  res.send(maxnum.toString())
});

//!EX 3)