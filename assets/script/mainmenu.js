let Emulatebtn = document.getElementById('Emulatebtn')
let mainmenu = document.querySelector('.main_menu')

Emulatebtn.addEventListener('click', function(){
    mainmenu.style.height = '0.1vh'
    
    setTimeout(() => {
        mainmenu.remove()
    }, 1000);
})