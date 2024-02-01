document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#item-1').addEventListener('click', e => {
        e.stopPropagation();
    })
})