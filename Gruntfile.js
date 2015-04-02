/* global module, require */

'use strict';

module.exports = function(grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        paths: {
            assets: 'src/assets',
            styles: 'src/styles',
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
                    //socketio: true,
                    base: ['src', '<%= paths.dev %>']
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: [
                    '<%= paths.styles %>/*.scss',
                    '<%= paths.styles %>/partials/*.scss'
                ],
                tasks: ['compass:dev'],
            },
            scripts: {
                files: [
                    'Gruntfile.js',
                    'src/scripts/{,**/}*.js',
                ]
            }
        },

        compass: {
            dist: {
                options: {
                    //require: 'susy',
                    sassDir: '<%= paths.styles %>',
                    cssDir: 'target/dist/css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    //require: 'susy',
                    sassDir: '<%= paths.styles %>',
                    cssDir: 'target/dev/css',
                    environment: 'development'
                }
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'src/scripts/**/*.js']
        },

        copy: {
            assets: {
                files: [{
                    expand: true,
                    cwd: 'src/assets',
                    src: ['fonts/*', 'images/*', '*'],
                    dest: '<%= paths.dev %>/assets',
                    filter: 'isFile'
                }],
            }
        }

    });

    // Default task(s).
    grunt.registerTask('serve', [
        'copy:assets',
        'compass:dev',
        'connect:dev',
        'watch'
    ]);

    //grunt.loadNpmTasks('grunt-connect-socket.io');


};
