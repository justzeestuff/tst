let windowsui = document.querySelector('.windows_ui')
let settingsicon = windowsui.querySelector('.bi-gear')
let games = windowsui.querySelector('.games')
let gamebtns = games.querySelectorAll('button')
let startcat = document.querySelector('.startcat')

import { dragstart } from './dragfunction.js'
import { windowclose,window_fullscreen } from './window_functions.js';

startcat.addEventListener('click', function(){
    if(windowsui.classList.contains('inactive')){
        windowsui.classList.remove('inactive')

        setTimeout(() => {
             windowsui.style.height = '400px'
        }, 5);
    }
    else{
        windowsui.style.height = '0'

        setTimeout(() => {
             windowsui.classList.add('inactive')
        }, 150);   
    }
})

settingsicon.addEventListener('click', function(){
    let Settings = document.querySelector('.Settings')
    Settings.classList.remove('inactive')

                const bar = Settings.querySelector('.bar')
                const fs = Settings.querySelector('.bi-bounding-box-circles')
                const close = Settings.querySelector('.bi-x-circle-fill')

                close.removeEventListener('click', windowclose)
                fs.removeEventListener('click', window_fullscreen)
                bar.removeEventListener('mousedown', dragstart)

                close.addEventListener('click', windowclose)
                fs.addEventListener('click', window_fullscreen)
                bar.addEventListener('mousedown', dragstart)
})