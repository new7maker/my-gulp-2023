import browsersync from "browser-sync";
import ifPlugin from "gulp-if";
import replace from "gulp-replace";
import changed from "gulp-changed";
import { deleteAsync } from 'del';

export const plugins = {
    browsersync: browsersync,
    if: ifPlugin,
    replace: replace,
    changed: changed,
    del: deleteAsync
};