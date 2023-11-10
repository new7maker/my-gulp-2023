import webpack from "webpack-stream";
import { config } from "../../webpack.config.js";

export const js = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(webpack(config))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}   