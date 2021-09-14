// let articlesArr = [
//   {
//     title: "HTML",
//     details: "All about HTML",
//     createdAt: new Date(),
//     author: {
//       name: "sumit Thapa",
//       email: "sumitthapa90@gmail.com",
//       age: "30",
//     },
//     tags: ["HTML", "Web development"],
//   },

//   {
//     title: "JavaScript",
//     details: "All about logic",
//     createdAt: new Date(),
//     author: {
//       name: "raman Thapa",
//       email: "ramanthapa91@gmail.com",
//       age: "24",
//     },
//     tags: ["JavaScript", "all about logic"],
//   },

//   {
//     title: "node js",
//     details: "All about backhand",
//     createdAt: new Date(),
//     author: {
//       name: "suraj Thapa",
//       email: "surajthapa96@gmail.com",
//       age: "26",
//     },
//     tags: ["NODE", "all about backhand"],
//   },
// ];
db.users.insertMany(users);

db.users.find({ gender: "Male" }, { sports: "cricket" }).pretty();

db.users.update({ name: "Steve Ortega" }, { $push: { sports: "golf field" } });

db.users.find({sports: {$in: ['football', 'cricket']}})

db.users.find({name: /ri/i})
