function openfaq(id, arrow) {
    document.querySelector(id).classList.toggle('visible');
    document.querySelector(id).classList.toggle('open-faq');
    document.querySelector(arrow).classList.toggle('rotate-arrow');
}