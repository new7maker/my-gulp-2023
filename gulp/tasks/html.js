import render from 'gulp-nunjucks-render';

export const html = () => {
    return app.gulp.src([app.path.src.html, app.path.src.html_pages])
        .pipe(render({
           path: ['src/html/']
        }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}