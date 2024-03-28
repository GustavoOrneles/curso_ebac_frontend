module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            cleancss: true
          },
          files: {
            "dist/css/main.css": "src/styles/main.less"
          }
        }
      },
      uglify: {
        options: {
          mangle: true,
          compress: true
        },
        my_target: {
          files: {
            'dist/js/main.min.js': ['src/scripts/main.js']
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  };
  