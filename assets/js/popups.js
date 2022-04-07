function openpopup(popup) {
    document.querySelector('.popup-overlay').style.display = 'grid';
    document.querySelector(popup).style.display = 'block';
}

function closepopup(popup) {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector(popup).style.display = 'none';
}

setTimeout(function() {
    document.querySelector('.popup-overlay').style.display = 'grid';
    document.querySelector('.popup-flyer').style.display = 'block';
}, 5000);