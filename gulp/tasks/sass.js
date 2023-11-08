import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

const sassPlugin = gulpSass(dartSass);

export const sass = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(sassPlugin())
        .pipe(rename({
            basename: 'style'
        }))
        .pipe(app.gulp.dest(app.path.build.css));
}