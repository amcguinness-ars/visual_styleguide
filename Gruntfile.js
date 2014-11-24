/*
 * File: Gruntfile.js
 * Description: Loads all Grunt plugins and defines tasks
 * Dependencies: grunt-contrib-sass
 *
 * @package style_guide
 */

module.exports = function(grunt) {
    /* === Initial Config === */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'expanded'
                },
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['sass/*.scss', 'sass/*/*.scss'],
                tasks: ['sass']
            }
        }
    });

    /* === Loading Plugins === */
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    /* === Register Tasks === */
    grunt.registerTask('default', ['sass', 'watch']);
};
