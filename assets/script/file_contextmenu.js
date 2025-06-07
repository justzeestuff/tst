import { file_Xmenu,file_options } from './veriables.js';

let rename_input = document.querySelector('.rename')
let renamingitem = null


// file context menu open
export function file_xmenu_open(e){
    if(file_Xmenu.classList.contains('inactive')){
        file_Xmenu.style.left = e.clientX + 'px'
        file_Xmenu.style.top = e.clientY + 'px'
        file_Xmenu.classList.remove('inactive')
        renamingitem = e.target
    }
}

// file contextmenu options
file_options.forEach(option => {
    option.addEventListener('click', function(e){
        switch (e.currentTarget.id) {
            case 'rename':
                rename_input.classList.remove('inactive')
                setTimeout(() => {
                    rename_input.style.width = '30vw'
                }, 9);
            break;
            case 'delete':
                 renamingitem.parentNode.remove()
            break;
        }
    })
});


// rennaming input
rename_input.addEventListener('input', function(){consistant_format()})

rename_input.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        rename_input.style.width = '0.1vw'
        consistant_format()
        setTimeout(() => {
            rename_input.classList.add('inactive')
        }, 200);
        renamingitem = null
        rename_input.value = ''
    }
})

function consistant_format() {
    const app = renamingitem.parentNode;
    const file = app.querySelector('.file')
    const name = file.querySelector('p')
    const bar = app.querySelector('.bar')
    const name1 = bar.querySelector('p')
    switch (name.id) {
        case 'txt':
            name.innerHTML = rename_input.value + '.txt';
            name1.innerHTML = rename_input.value + '.txt';
        break;
    }
}


document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        console.log('User left the tab');
    } else {
        console.log('User returned to the tab');
    }
});