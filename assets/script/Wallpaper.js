import{wallpaperinput,premadebg,removewallpaper} from './veriables.js'
// costum wallpaper input
wallpaperinput.addEventListener('change', function () {
    const file = wallpaperinput.files[0];

    if (file) {
        const img = URL.createObjectURL(file);
        document.body.style.backgroundImage = `url(${img})`; // ✅ correct usage
    }
});
// pre made backgrounds
premadebg.forEach(bg => {
    bg.addEventListener('click', function(){
        document.body.style.backgroundImage = `url(${bg.src})`
    })
});
// background removal
removewallpaper.addEventListener('click', function(){
    document.body.style.backgroundImage = 'none'
})
