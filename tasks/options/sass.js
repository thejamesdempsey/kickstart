module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded'
    },
    files: {
      'css/build/screen.css': 'sass/screen.scss'
    }
  }
}