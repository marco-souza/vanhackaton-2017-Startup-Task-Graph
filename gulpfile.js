// Imports
let gulp        = require("gulp"),
    pug         = require("gulp-pug"),
    del         = require("del"),
    webpack     = require("webpack"),
    htmlmin     = require("gulp-htmlmin"),
    gutil       = require("gulp-util"),
    config      = require("./app/config"),
    gulpConfig  = require("./gulp.config");

// Setup
let bundleDoneCalled = {};


/************************************************************
* Clean Task: Remove destination folder
************************************************************/
gulp.task("clear", () => {
    return del.sync([
        `${gulpConfig.app.dest}/assets/`,
        `${gulpConfig.app.dest}/index.html`
    ]);
});


/************************************************************
* Assets Task: Copy assets to destination folder
************************************************************/
gulp.task("assets", () => {
    return gulp.src(gulpConfig.app.src.assets)
    .pipe(gulp.dest(`${gulpConfig.app.dest}/assets`));
});


/************************************************************
* Pug Task: Generate html files in destination folder
************************************************************/
gulp.task("pug", () => {
    return gulp.src(gulpConfig.app.src.html)
    .pipe(pug({data: config.webinfo}))        // Pass details
    .pipe(htmlmin({collapseWhitespace: true}))  // Minify html
    .pipe(gulp.dest(gulpConfig.app.dest));
});


/************************************************************
* Bundle Task: Generate js and css files
************************************************************/
gulp.task("bundle", (done) => {
    return webpack(require("./webpack/dist.config"), (err,stats) => {
        if (err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString());

        if(!bundleDoneCalled.all) {
            bundleDoneCalled.all = true;
            done();
        }
    });
});


/************************************************************
* Default Task
************************************************************/
gulp.task("default", [
    "clear",
    "assets",
    "bundle",
    "pug"
]);


/************************************************************
* Watch Task
************************************************************/
gulp.task("watch", [
    "default",
], () => {
    gulp.watch(["./app/src/**/*"], ["bundle"]);
    gulp.watch(["./app/assets/**/*"], ["assets"]);
    gulp.watch(["./app/**/*.pug"], ["pug"]);
});
