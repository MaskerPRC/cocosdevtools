module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean : ["bin","bin_web"],
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'src/*.js', 'test/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
      }
    },
    uglify: {
      options: {
        //beautify: true
        compress: { drop_console: true }
      },
      build_web: {
        files: {
          'bin_web/cocos-devtools-web.min.js' : [
            'src/I18n.js',
            'src/ChartFPS.js',
            'src/ScaleProfiles.js',
            'src/AttrTable.js',
            'src/TreeList.js',
            'src/InspectElementConfig.js',
            'src/InspectElement.FixDrawNode.js',
            'src/InspectElement.js',
            'src/web.js'
          ]
        }
      },
      build: {
        files: {
          'bin/config.min.js' : ['src/InspectElementConfig.js'],
          'bin/injector.min.js' : ['src/PipePage.js', 'src/InspectElement.js', 'src/InspectElement.FixDrawNode.js', 'src/injector.js']
        }
      },
      compress: {
        files: {
          'bin/elements-main.js' : ['bin/elements-main.js'],
          'bin/index.js' : ['bin/index.js'],
          'bin/InspectElement.js' : ['bin/InspectElement.js'],
          'bin/PipeDevtool.js' : ['bin/PipeDevtool.js'],
          'bin/PipePage.js' : ['bin/PipePage.js'],
          'bin/AttrTable.js' : ['bin/AttrTable.js'],
          'bin/TreeList.js' : ['bin/TreeList.js']
        }
      }
    },
    replace: {
      injectScript: {
        src: ['src/*.js'],
        dest : 'bin/',
        replacements: [{
          from: /\/\/#injector\.min\.js#/g,
          to: "<%= grunt.file.read('bin/injector.min.js') %>"
        },
        {
          from: /\/\/#config\.min\.js#/g,
          to: "<%= grunt.file.read('bin/config.min.js') %>"
        }]
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd:'src/', src: ['*.html', '*.json', '*.png'], dest: 'bin/'}
        ]
      }
    },
    exec: {
      'pack-extension': 'cmd /C build.bat'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean', 'uglify:build', 'replace', 'uglify:compress', 'copy', 'exec', 'uglify:build_web']);
  grunt.registerTask('web', ['clean', 'uglify:build_web']);

};