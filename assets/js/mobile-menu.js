function openMenu() {
    document.querySelector('.mobile-menu').style.display = "block";
    document.querySelector('.mobile-menu').classList.add("openupmenu");
    document.querySelector('html').style.overflow = "hidden";
    setTimeout(function() {
        document.querySelector('.mobile-menu').classList.remove("openupmenu");
    }, 500);
}

function closeMenu() {
    document.querySelector('.mobile-menu').classList.add("closemenu");
    setTimeout(function() {
        document.querySelector('.mobile-menu').classList.remove("closemenu");
        document.querySelector('.mobile-menu').style.display = "none";
        document.querySelector('html').style.overflow = "auto";
    }, 500);
}