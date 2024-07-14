import { src, dest, watch, series } from 'gulp' //Series permite ejecutar una tarea y despues otra
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function js(done){
    src('src/js/app.js')
        .pipe( dest('build/js') )
    done()
}

export function css(done){
    src('src/scss/app.scss', {sourcemaps: true}) //sourcemaps podemos saber en que archivo de sass se encuentra el codigo para modificarlo
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps: true}) )

    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
}

export default series( js, css, dev);