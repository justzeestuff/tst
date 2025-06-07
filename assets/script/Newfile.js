import { body_options } from './veriables.js';
import { dragstart } from './dragfunction.js'
import { windowopen,windowclose,window_fullscreen } from './window_functions.js';
import {file_xmenu_open} from './file_contextmenu.js'

body_options.forEach(option => {
    option.addEventListener('click', function(e){
        let app = document.createElement('div');
         let file = document.createElement('div');
          let icon = document.createElement('img');
          let name = document.createElement('p');
         let window = document.createElement('div');
          let bar = document.createElement('div');
           let name1 = document.createElement('p')
           let controls = document.createElement('div')
            let close = document.createElement('i')
            let fullscreen = document.createElement('i')
          let display = document.createElement('div')

         document.body.appendChild(app);
          app.appendChild(file);
           file.appendChild(icon); file.appendChild(name);
          app.appendChild(window);
          window.appendChild(bar); window.appendChild(display);
           bar.appendChild(name1); bar.appendChild(controls);
           controls.appendChild(fullscreen); controls.appendChild(close)
           
          app.classList.add('app')
           file.classList.add('file')
           window.classList.add('window','inactive')
           bar.classList.add('bar')
            close.classList.add('bi','bi-x-circle-fill')
            fullscreen.classList.add('bi','bi-bounding-box-circles')
           display.classList.add('display',)


        file.removeEventListener('mousedown', dragstart)
        file.removeEventListener('dblclick', windowopen)
        file.removeEventListener('contextmenu', file_xmenu_open)
        close.removeEventListener('click', windowclose)
        fullscreen.removeEventListener('click', window_fullscreen)
        bar.removeEventListener('mousedown', dragstart)

        file.addEventListener('mousedown', dragstart)
        file.addEventListener('dblclick', windowopen)
        file.addEventListener('contextmenu', file_xmenu_open)
        close.addEventListener('click', windowclose)
        fullscreen.addEventListener('click', window_fullscreen)
        bar.addEventListener('mousedown', dragstart)

        switch (e.currentTarget.id) {
            case 'newtxt':
                icon.src = 'assets/img/txt.webp'
                name.textContent = 'note.txt'
                name1.textContent = name.textContent
                name.id = 'txt'
                break;
            case 'personalize':
                const Settings = document.querySelector('.Settings')
                const bar = Settings.querySelector('.bar')
                const fs = Settings.querySelector('.bi-bounding-box-circles')
                const close = Settings.querySelector('.bi-x-circle-fill')

                close.removeEventListener('click', windowclose)
                fs.removeEventListener('click', window_fullscreen)
                bar.removeEventListener('mousedown', dragstart)

                close.addEventListener('click', windowclose)
                fs.addEventListener('click', window_fullscreen)
                bar.addEventListener('mousedown', dragstart)


                Settings.classList.remove('inactive')
                app.remove()
                break;
        }
    })
});