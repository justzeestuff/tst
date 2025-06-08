let clock = document.getElementById('clock');

function clockupdate(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    clock.textContent = hours + ':' + minutes;
}

setInterval(() => {
    clockupdate()
}, 1000);
