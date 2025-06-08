import { dragstart } from "./dragfunction.js";
import { windowclose,window_fullscreen } from "./window_functions.js";
let games = document.querySelector('.games')
let game_options = games.querySelectorAll('button')

game_options.forEach(Option => {
    Option.addEventListener('click', gameopen)

    function gameopen(){
        switch (Option.id) {
            case 'Memorygame':{
                let Memorygame = document.querySelector('.Memorygame')
                const close = Memorygame.querySelector('.bi-x-circle-fill')
                const fs = Memorygame.querySelector('.bi-bounding-box-circles')
                const bar = Memorygame.querySelector('.bar')
                Memorygame.classList.remove('inactive')

                close.removeEventListener('click', windowclose)
                fs.removeEventListener('click', window_fullscreen)
                bar.removeEventListener('mousedown', dragstart)

                close.addEventListener('click', windowclose)
                fs.addEventListener('click', window_fullscreen)
                bar.addEventListener('mousedown', dragstart)
                break;
            }
            case 'player':{
                
            }
        }
    }
});