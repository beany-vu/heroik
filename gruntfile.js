module.exports = function (grunt) {
    grunt.initConfig({
        wiredep: {
            task: {
                src: 'index.html'
            }
        }, // wiredep
        sass: {
            dist: {
                options: {
                    sourceMap: true,
                    style: 'expanded'
                },
                files: [{
                    src: 'scss/style.scss',
                    dest: 'css/style.css'
                }]
            },
        }, // sass
        watch: {
            options: {
                spawn: false,
                livereload: true
            },
            scripts: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        }, // watch
        connect: {
            sever: {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    base: '.',
                    livereload: true
                }
            }
        }, // connect
    })

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('default', ['connect', 'wiredep', 'sass', 'watch']);

}