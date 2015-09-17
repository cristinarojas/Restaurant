module.exports = function(grunt) {
  // Loading npm tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    // Sass compilation
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true
        },
        files: {
          'public/css/style.css'                : 'sass/style.scss',
          'public/css/mediaqueries/desktop.css' : 'sass/mediaqueries/desktop.scss',
          'public/css/mediaqueries/any.css'     : 'sass/mediaqueries/any.scss',
          'public/css/mediaqueries/ipad.css'    : 'sass/mediaqueries/ipad.scss',
          'public/css/mediaqueries/iphone6.css' : 'sass/mediaqueries/iphone6.scss',
          'public/css/mediaqueries/iphone5.css' : 'sass/mediaqueries/iphone5.scss',
          'public/css/mediaqueries/iphone4.css' : 'sass/mediaqueries/iphone4.scss'
        }
      }
    },
    // Watch for sass files changes
    watch: {
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  // Registering default task (execute as 'grunt')
  grunt.registerTask('default', ['sass']);
};
