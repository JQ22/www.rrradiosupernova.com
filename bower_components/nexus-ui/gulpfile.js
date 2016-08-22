var $        = require('gulp-load-plugins')();
var argv     = require('yargs').argv;
var gulp     = require('gulp');
var rimraf   = require('rimraf');
var sequence = require('run-sequence');
var sherpa   = require('style-sherpa');
var webpack = require('webpack');

// Check for --production flag
//test
var isProduction = !!(argv.production);

// Browsers to target when prefixing CSS.
var COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

// File paths to various assets are defined here.
var PATHS = {
  assets: [
    'src/assets/**/*',
    '!src/assets/{!img,js,scss}/*'
  ],
  vendor: [
    'vendor/**/*'
  ],
  sass: [
    'bower_components/foundation-sites/scss',
    'bower_components/motion-ui/src/'
  ]
};

// Delete the "dist" folder
// This happens every time a build starts
gulp.task('clean', function(done) {
  rimraf('dist', done);
});

// Copy files out of the assets folder
// This task skips over the "img", "js", and "scss" folders, which are parsed separately
gulp.task('copy', function() {
  gulp.src(PATHS.assets)
    .pipe(gulp.dest('dist/assets'));

  gulp.src(PATHS.vendor)
    .pipe(gulp.dest('dist/vendor'));
});

gulp.task('styleguide', function(cb) {
  sherpa('src/styleguide/index.md', {
    output: 'dist/styleguide.html',
    template: 'src/styleguide/template.html'
  }, cb);
});

// Compile Sass into CSS
// In production, the CSS is compressed
gulp.task('sass', function() {
  var minifycss = $.if(isProduction, $.minifyCss());

  return gulp.src('src/assets/scss/app.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe(minifycss)
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest('dist/assets/css'));
});

// Combine JavaScript into one file
// In production, the file is minified
gulp.task('javascript', function() {
  var config = Object.create(require("./webpack.config.js"));

  if (isProduction){
    config.plugins = config.plugins.concat(
      new webpack.DefinePlugin({
        "process.env" : {
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
      })
    );
  }else{
    config.devtool = "sourcemap";
    config.debug = true;
  }
  webpack(config, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      delete require.cache[require.resolve('./webpack.config.js')];//because we usually change this file
  });
});

// Build the "dist" folder by running all of the above tasks
gulp.task('build', function(done) {
  sequence('clean', ['sass', 'javascript', 'copy'], 'styleguide', done);
});

// Build and and watch for file changes
gulp.task('default', ['build'], function() {
  gulp.watch(PATHS.assets, ['copy']);
  gulp.watch(['src/assets/scss/**/*.scss'], ['sass']);
  gulp.watch(['src/assets/js/**/*.js'], ['javascript']);
  gulp.watch(['src/styleguide/**'], ['styleguide']);

  gulp.watch(['webpack.config.js'], ['build']);
});
