const { ObjectId } = require("mongodb");

const caravans = [
  {
    _id:new ObjectId(),
    Name: "Tower Lawn",
    lat: 26.7,
    lng: 0.956,
  },
  {
    _id:new ObjectId(),
    Name: "South Lawn",
    lat: 26.7,
    lng: 0.956,
  },
  {
    _id:new ObjectId(),
    Name: "Pennisula Lawn",
    lat: 26.7,
    lng: 0.956,
  },
  {
    _id:new ObjectId(),
    Name: "West Lawn",
    lat: 26.7,
    lng: 0.956,
  },
  {
    _id:new ObjectId(),
    Name: "Lakefield",
    lat: 26.7,
    lng: 0.956,
  },
  {
    _id:new ObjectId(),
    Name: "Lakeside East",
    lat: 26.7,
    lng: 0.956,
  },
];

module.exports = caravans;
