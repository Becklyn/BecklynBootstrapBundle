"use strict";

var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var less = require("gulp-less");
var cssMin = require("gulp-minify-css");


gulp.task("js",
    function ()
    {
        return gulp.src("Resources/assets/js/*.js")
            .pipe(uglify({
                compress: true
            }))
            .pipe(gulp.dest("Resources/public/js/"));
    }
);

gulp.task("bundle",
    function ()
    {
        return gulp.src([
            "Resources/assets/js/bootstrap.js",
            "Resources/assets/js/*.js"
        ])
        .pipe(uglify({
            compress: true
        }))
        .pipe(concat("all.js"))
        .pipe(gulp.dest("Resources/public/js/"));
    }
);

gulp.task("less",
    function ()
    {
        return gulp.src("Resources/assets/less/*.less")
        .pipe(less())
        .pipe(cssMin())
        .pipe(gulp.dest("Resources/public/css/"));
    }
);


gulp.task("default", ["js", "bundle"]);
//
//module.exports = function (grunt) {
//    'use strict';
//
//    grunt.loadNpmTasks("grunt-contrib-uglify");
//    grunt.loadNpmTasks("grunt-contrib-less");
//
//    // Project configuration.
//    grunt.initConfig({
//        uglify: {
//            integration: {
//                options: {
//                    report: "gzip"
//                },
//                files: [{
//                    expand: true,
//                    cwd: "Resources/assets/js",
//                    src: "**/*.js",
//                    dest: "Resources/public/js"
//                }]
//            }
//        },
//        less: {
//            integration: {
//                options: {
//                    compress: true,
//                    cleancss: true
//                },
//                files: {
//                    "Resources/public/css/bootstrap.css": "Resources/assets/less/integration.less"
//                }
//            }
//        }
//    });
//
//
//    // These plugins provide necessary tasks.
//    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
//
//    grunt.registerTask("default", ["uglify", "less"]);
//};
