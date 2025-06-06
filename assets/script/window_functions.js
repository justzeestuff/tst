
function windowopen(e){
    const app = e.target.parentNode
    const window = app.querySelector('.window')
    window.classList.remove('inactive')
}
function windowclose(e){
    const window = e.target.closest('.window')
    window.classList.add('inactive')
}





export { windowopen,windowclose }