module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");

    // Project configuration.
    grunt.initConfig({
        uglify: {
            integration: {
                options: {
                    report: "gzip"
                },
                files: [{
                    expand: true,
                    cwd: "Resources/assets/js",
                    src: "**/*.js",
                    dest: "Resources/public/js"
                }]
            }
        },
        less: {
            integration: {
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    "Resources/public/css/bootstrap.css": "Resources/assets/less/integration.less"
                }
            }
        }
    });


    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.registerTask("default", ["uglify", "less"]);
};
