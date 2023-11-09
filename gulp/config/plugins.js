import browsersync from "browser-sync";
import ifPlugin from "gulp-if";
import replace from "gulp-replace";
import changed from "gulp-changed";

export const plugins = {
    browsersync: browsersync,
    if: ifPlugin,
    replace: replace,
    changed: changed
};