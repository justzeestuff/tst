import { body_options } from './veriables.js';
import { dragstart } from './dragfunction.js'

body_options.forEach(option => {
    option.addEventListener('click', function(e){
        let app = document.createElement('div');
         let file = document.createElement('div');
          let icon = document.createElement('img');
          let name = document.createElement('p');
         let window = document.createElement('div');

         document.body.appendChild(app);
          app.appendChild(file);
           file.appendChild(icon); file.appendChild(name);
          app.appendChild(window);

          app.classList.add('app')
           file.classList.add('file')
           window.classList.add('window')

        if(e.currentTarget.id === 'newtxt'){
            icon.src = 'assets/img/txt.webp'
            name.textContent = 'note.txt'
        }

        file.addEventListener('mousedown', dragstart)
    })
});