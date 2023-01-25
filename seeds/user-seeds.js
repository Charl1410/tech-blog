const User = require("../models/User")

const userData = [
    {
      name: "Charlotte",
      email: "charlotte@bootcamp.com",
      password: "gjiro4523",
    },
    {
      name: "Jason",
      email: "jason@bootcamp.com",
      password: "vfkosrmt34r",
    },
    {
      name: "Jordan",
      email: "jordan@bootcamp.com",
      password: "fmraeklnrt3",
    },
    {
      name: "Ellesse",
      email: "ellesse@bootcamp.com",
      password: "rfmk4o5tF",
    },
    {
      name: "Chris",
      email: "chris@bootcamp.com",
      password: "rfgrevf4",
    },
    {
      name: "Mind",
      email: "mind@bootcamp.com",
      password: "rfrmko53222",
    },
    {
      name: "Moahmed",
      email: "mohamed@bootcamp.com",
      password: "rffh66DR",
    }
  ];

  const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;  