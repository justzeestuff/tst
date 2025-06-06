let dragging = false
let item = null
let offsetX, offsetY

document.addEventListener('mousemove', dragging_fn)
document.addEventListener('mouseup', dragend)

function dragstart(e) {
    dragging = true
    item = e.target
    
    offsetX = e.clientX - item.getBoundingClientRect().left
    offsetY = e.clientY - item.getBoundingClientRect().top

    if(item.classList.contains('bar')){
        item = item.parentNode
        item.style.transform = 'none' 
    }
    e.preventDefault()
}

function dragging_fn(e) {
    if (dragging && item) {
        item.style.left = (e.clientX - offsetX) + 'px'
        item.style.top = (e.clientY - offsetY) + 'px'
    }
}

function dragend() {
    dragging = false
    item = null
}

export { dragstart }
