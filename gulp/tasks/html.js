import render from 'gulp-nunjucks-render';

export const html = () => {
    return app.gulp.src([app.path.src.html, app.path.src.html_pages, `!./src/_layout.html`])
        .pipe(render({
           path: ['src/']
        }))
        .pipe(app.gulp.dest(app.path.build.html));
}