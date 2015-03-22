/* global module, require */

'use strict';

module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        paths: {
            assets: 'app/assets',
            styles: 'app/styles',
            dev: 'target/dev',
            dist: 'target/dist'
        },

        connect: {
            dev: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    livereload: true,
                    open: true,
                    base: ['app', '<%= paths.dev %>']
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['<%= paths.styles %>/*.scss'],
                tasks: ['compass:dev'],
            },
            scripts: {
                files: [
                    'Gruntfile.js',
                    'app/scripts/{,**/}*.js',
                ]
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: '<%= paths.styles %>',
                    cssDir: 'target/dist/css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: '<%= paths.styles %>',
                    cssDir: 'target/dev/css',
                    environment: 'development'
                }
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'app/scripts/**/*.js']
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'app/assets',
                    src: ['fonts/*', '*'],
                    dest: '<%= paths.dev %>/assets',
                    filter: 'isFile'
                }],
            }
        }

    });

    // Default task(s).
    grunt.registerTask('serve', [
        'compass:dev',
        'connect:dev',
        'watch'
    ]);

};
