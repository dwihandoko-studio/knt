// imports
// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");
global.__basedir = __dirname;

const app = express();

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, PORT_APP } =
//   process.env;

const PORT = 4000;

// middleware
app.use(express.static("public"));
app.use(express.static("uploads"));
app.use(express.json());
app.use(cookieParser());
app.use(fileupload());

// view engine
app.set("view engine", "html");

// database connection
// const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
// const DB_URI =
//   "mongodb://localhost:27017/node_tte?appname=MongoDB%20App&ssl=false";
// mongoose
//   .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch((err) => console.log(err));

// routes
// app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
// app.get("/", (req, res) => {

//   // TODO
//   const books = [
//     { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
//     { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
//     { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
//     { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
//     { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
//     { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
//     { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
//   ];
//   let greatAuthors = [];
//   const filter = () => {
//         let filterBook = [];
//         // books.map((book) => {
//         for (let i = 0; i <= books.length; i++) {
//             let b = books[i];
//             console.log(b);
//             if(b.sales > 1000000) {
//                 filterBook.push(books[i]);
//             }
//         }
//         // });

//         return filterBook;
//     };

//     const hasilFilter = filter();
//     for (ii=0;ii <= hasilFilter.length; ii++) {
//         const b = hasilFilter[ii];
//     }

//     hasilFilter.map((book) => {greatAuthors.push(`${book.author} adalah penulis buku ${book.title} yang sangat hebat!`)});

// console.log(hasilFilter);
// });
// app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
// app.use(authRoutes);
// app.use(videoRoutes);
// app.use(streamRoutes);
// app.use(versionappRoutes);
// app.use(apiRoutes);

app.listen(PORT || 5081, () => {
  console.log(`Server started at http://localhost:${PORT || 5081}`);
});
