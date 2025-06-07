import {sectionbtns,tabs} from './veriables.js'

sectionbtns.forEach(btn => {
    btn.addEventListener('click', function(){
        tabs.forEach(tab => {
            tab.classList.add('inactive')

            if(btn.getAttribute('data-tab') === tab.id){
                tab.classList.remove('inactive')
            }
        });
    })
});