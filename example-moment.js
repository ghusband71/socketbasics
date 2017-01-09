var moment = require("moment");
var now = moment();

console.log(now.format());

now.subtract(1, "year");
console.log(now.format());

console.log(now.format("MMM Do YYYY h:mma"));

// timestamp; seconds since Jan 1st, 1970
console.log(now.format("X")); // seconds since 1/1/2970
console.log(now.format("x")); // milliseconds since 1/1/2970
// moment outputs strings..

console.log(now.valueOf()); // this is a number

// is a number; e.g.  1483931878
// use to compare 2 events

var timestamp = 1452309645883;
// all timestamps are in UTC
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format("h:mm a"));