module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['js/*.js', 'js/**/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['sass/**/*.scss', 'sass/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['./**/*.html'],
    tasks: [],
    options: {
      spawn: false,
    }
  }
}