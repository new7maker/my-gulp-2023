import browsersync from "browser-sync";
import ifPlugin from "gulp-if";
import replace from "gulp-replace";

export const plugins = {
    browsersync: browsersync,
    if: ifPlugin,
    replace: replace
};