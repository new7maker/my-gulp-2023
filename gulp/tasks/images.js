import imagemin from 'gulp-imagemin';

export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(app.gulp.dest(app.path.build.images)); 
}