
// window open
function windowopen(e){
    const app = e.target.parentNode
    const window = app.querySelector('.window')
    window.classList.remove('inactive')
}
function windowclose(e){
    const window = e.target.closest('.window')
    window.classList.add('inactive')
}
// window fullscreen 

function window_fullscreen(e){
    const window = e.target.closest('.window')
    
    if(window.classList.contains('fullscreen')){
        window.classList.remove('fullscreen')
    }
    else{
        window.classList.add('fullscreen')
    }
}

export { windowopen,windowclose,window_fullscreen }