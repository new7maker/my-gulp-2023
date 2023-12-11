import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import autoPrefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; 

const sassPlugin = gulpSass(dartSass);

export const sass = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.changed(app.path.build.css))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sassPlugin({
            includePaths: './node_modules/'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: ['last 3 version'],
            cascade: true
        }))
        .pipe(app.plugins.if(!app.isBuild, cleanCss()))
        .pipe(rename({
            basename: 'style'
        }))
        .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev }))
        .pipe(app.plugins.browsersync.stream());
}