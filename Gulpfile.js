/*
 * experiments
 * https://github.com/jaguard/experiments
 *
 * Copyright (c) 2014 Jaguard OSS
 * Licensed under the MIT license.
 */

"use strict";

var gulp = require("gulp"); //  https://github.com/gulpjs/gulp

gulp.task("jshint", function () {
	var	jshint = require("gulp-jshint"); // https://github.com/wearefractal/gulp-jshint
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(["./lib/**/*.js", "./test/**/*.js"])
    .pipe(jshint())
    .pipe(jshint.reporter(require("jshint-stylish")));
});

// Rerun the task when a file changes
gulp.task("watch", function () {
  gulp.watch(["./lib/**/*.js", "./test/**/*.js"], ["jshint"]);
});

gulp.task("test", function () {
	var	jasmine = require("gulp-jasmine"); // https://github.com/sindresorhus/gulp-jasmine
	// add reporter: https://github.com/sindresorhus/gulp-jasmine/issues/8
	// require("minijasminenode"); // puts jasmine in global namespace
  // require("jasmine-reporters"); // depends on jasmine in global namespace
  //  .pipe(jasmine({ verbose: true, reporter: new jasmine.JUnitXmlReporter() }));
  return gulp.src("./test/*.spec.js").pipe(jasmine({ verbose: true }));
});

// register alias tasks
gulp.task("lint", ["jshint"]);
gulp.task("default", ["lint", "test", "watch"]);
