//! Capturing VS Bubbling
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('body').addEventListener('click', e => {
        // e.stopPropagation();
        alert("Body")
    }, true)
    document.querySelector('#list').addEventListener('click', e => {
        // e.stopPropagation();
        alert("Ul")
    }, true)
    document.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', (e) => {
            // e.stopPropagation();
            alert(e.target.id)
        }, true)
    });
});