import { body_options } from './veriables.js';
import { dragstart } from './dragfunction.js'
import { windowopen,windowclose,window_fullscreen } from './window_functions.js';

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

        file.addEventListener('mousedown', dragstart)
        file.addEventListener('dblclick', windowopen)
        close.addEventListener('click', windowclose)
        fullscreen.addEventListener('click', window_fullscreen)
        bar.addEventListener('mousedown', dragstart)
        
        if(e.currentTarget.id === 'newtxt'){
            icon.src = 'assets/img/txt.webp'
            name.textContent = 'note.txt'
        }
    })
});