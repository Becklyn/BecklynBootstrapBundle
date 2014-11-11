module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");

    // Project configuration.
    grunt.initConfig({
        uglify: {
            core: {
                options: {
                    report: "gzip"
                },
                files: [{
                    dest: "Resources/public/js/bootstrap.js",
                    src: [
                        "Resources/assets/js/core/transition.js",
                        "Resources/assets/js/core/alert.js",
                        "Resources/assets/js/core/button.js",
                        "Resources/assets/js/core/carousel.js",
                        "Resources/assets/js/core/collapse.js",
                        "Resources/assets/js/core/dropdown.js",
                        "Resources/assets/js/core/modal.js",
                        "Resources/assets/js/core/tooltip.js",
                        "Resources/assets/js/core/popover.js",
                        "Resources/assets/js/core/scrollspy.js",
                        "Resources/assets/js/core/tab.js",
                        "Resources/assets/js/core/affix.js"
                    ]
                }]
            },
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
