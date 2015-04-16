var dest = './dist';
var src = './src';
var gutil = require('gulp-util');

module.exports = {
    server: {
        settings: {
            root: [dest, src + '/bower_components'],
            host: 'localhost',
            port: 8080,
            livereload: {
                port: 35929
            }
        }
    },
    sass: {
        src: src + '/styles/**/*.{sass,scss,css}',
        dest: dest + '/styles',
        settings: {
            indentedSyntax: false, // Enable .sass syntax?
            imagePath: 'assets/images' // Used by the image-url helper
        }
    },
    browserify: {
        settings: {
            transform: ['reactify', 'babelify']
        },
        src: src + '/scripts/index.jsx',
        dest: dest + '/scripts',
        outputName: 'index.js',
        debug: gutil.env.type === 'dev'
    },
    html: {
        src: 'src/index.html',
        dest: dest
    },
    watch: {
        src: 'src/**/*.*',
        tasks: ['build']
    }
};
