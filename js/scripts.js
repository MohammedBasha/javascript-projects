const cursor = document.querySelector('.cursor'); // the cursor element

// Listen to the mouse movement
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY));
});

window.addEventListener('scroll', () => {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + 'px';
});

window.addEventListener('click', () => {
    if (cursor.classList.contains('click')) {
        cursor.classList.remove('click');
        void cursor.offsetWidth; // Triggering a DOM reflow
        cursor.classList.add('click');
    } else {
        cursor.classList.add('click');
    }
});