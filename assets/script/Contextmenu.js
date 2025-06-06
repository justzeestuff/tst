import { body_Xmenu,file_Xmenu } from './veriables.js';

document.body.addEventListener('contextmenu', function(e){
    if(body_Xmenu.classList.contains('inactive')){
        body_Xmenu.style.left = e.clientX + 'px'
        body_Xmenu.style.top = e.clientY + 'px'
        body_Xmenu.classList.remove('inactive')
    }
    e.preventDefault()
})
document.body.addEventListener('click', function(){
    body_Xmenu.classList.add('inactive')
    file_Xmenu.classList.add('inactive')
})