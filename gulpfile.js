var gulp = require("gulp");

var LEAGUE_KEYS = {
  2014: "331.l.246998",
  2015: "348.l.22551",
  2016: "359.l.154896",
  2017: "371.l.632148"
};

// tasks
gulp.task("default", function () {
  return JSON.stringify(LEAGUE_KEYS);
});
