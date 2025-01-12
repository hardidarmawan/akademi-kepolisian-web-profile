// Type Writer 
function typeWriter(text, elementId, speed) {
    let i = 0;
    let element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

let text = "REPUBLIK INDONESIA";

typeWriter(text, "typewriter", 100);

// Hamburger Nav
function toggleMenu() {
    const menu = document.querySelector('.hamburger-nav');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hide');
        setTimeout(() => menu.style.display = 'none', 100);
    } else {
        menu.style.display = 'flex';
        menu.classList.remove('hide');
        menu.classList.add('show');
    }
}

function hideMenu() {
    const menu = document.querySelector('.hamburger-nav');
    menu.classList.remove('show');
    menu.classList.add('hide');
    setTimeout(() => menu.style.display = 'none', 100);
}