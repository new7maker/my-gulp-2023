// Основной модуль
import gulp from 'gulp';

// Импорт путей
import { path } from "./gulp/config/path.js";

global.app = {
    gulp: gulp, 
    path: path
}

// Импорт задач
import { html } from "./gulp/tasks/html.js";
import { sass } from "./gulp/tasks/sass.js";
import { clean } from "./gulp/tasks/clean.js";


gulp.task('default', gulp.series(clean, gulp.parallel(html, sass)));