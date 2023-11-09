import render from 'gulp-nunjucks-render';

export const html = () => {

    return app.gulp.src([app.path.src.html, app.path.src.html_pages])
        .pipe(app.plugins.changed(app.path.build.html))
        .pipe(render({
           path: ['src/html/']
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}