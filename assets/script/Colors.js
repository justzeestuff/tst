import{bordercolor,fontcolor} from './veriables.js'

bordercolor.addEventListener('input',function(e) {
  document.body.style.setProperty('--border-color', e.target.value)
});

fontcolor.addEventListener('input',function(e) {
  document.body.style.setProperty('--font-color', e.target.value)
});