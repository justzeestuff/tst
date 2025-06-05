import { body_Xmenu,body_options } from './veriables.js';

document.addEventListener('contextmenu', function(e){
    if(body_Xmenu.classList.contains('inactive')){
        body_Xmenu.style.left = e.clientX + 'px'
        body_Xmenu.style.top = e.clientY + 'px'
        body_Xmenu.classList.remove('inactive')
    }
    e.preventDefault()
})
document.addEventListener('click', function(){
    body_Xmenu.classList.add('inactive')
})