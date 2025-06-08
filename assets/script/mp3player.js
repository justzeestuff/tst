let songdisplay = document.querySelector('.songdisplay')
let songinput = songdisplay.querySelector('input')
let audio = songdisplay.querySelector('audio')

songinput.addEventListener('change', function () {
    let audiosrc = songinput.files[0]; // <-- get the actual file
    if (audiosrc) {
        audio.src = URL.createObjectURL(audiosrc);
    }
});
