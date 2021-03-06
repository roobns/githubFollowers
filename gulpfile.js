var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var webserver = require('gulp-webserver');
var opn       = require('opn');

var stylesPath = 'app/css/*.css';
var jsFiles = 'app/js/**/*.js';


var server = {
  host: 'localhost',
  port: '8001'
}

gulp.task('webserver', function() {
  gulp.src( 'app' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

 gulp.task('watch', function(){
   gulp.watch(stylesPath);
   gulp.watch(jsFiles);
 });


gulp.task('default', ['webserver', 'openbrowser']);