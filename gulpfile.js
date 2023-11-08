// Основной модуль
import gulp from 'gulp';

// Импорт путей
import { path } from "./gulp/config/path.js";

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    gulp: gulp, 
    path: path,
    plugins: plugins,
}

// Импорт задач
import { html } from "./gulp/tasks/html.js";
import { sass } from "./gulp/tasks/sass.js";
import { clean } from "./gulp/tasks/clean.js";
import { server } from "./gulp/tasks/server.js";


// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, sass);
}

gulp.task('default', gulp.series(clean, gulp.parallel(html, sass), gulp.parallel(server, watcher)));