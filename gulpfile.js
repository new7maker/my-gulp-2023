// Основной модуль
import gulp from 'gulp';

// Импорт путей
import { path } from "./gulp/config/path.js";

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp: gulp, 
    path: path,
    plugins: plugins,
}

// Импорт задач
import { html } from "./gulp/tasks/html.js";
import { sass } from "./gulp/tasks/sass.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { clean } from "./gulp/tasks/clean.js";
import { server } from "./gulp/tasks/server.js";
import { zip } from "./gulp/tasks/zip.js";


// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, sass);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Основные задачи
const mainTasks = gulp.parallel(html, sass, images, js); 

// Построение сценариев выполенения задач
const dev =  gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const deployZIP = gulp.series(clean, mainTasks, zip);

export { dev };
export { deployZIP };

// Выполнение сценария по умолчанию
gulp.task('default', dev);