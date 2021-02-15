const modalBtn1 = document.querySelector('.modal-btn-1')
const modal1 = document.querySelector('.modal-overlay-1')
const closeBtn1 = document.querySelector('.close-btn-1')
const modalBtn2 = document.querySelector('.modal-btn-2')
const modal2 = document.querySelector('.modal-overlay-2')
const closeBtn2 = document.querySelector('.close-btn-2')
const modalBtn3 = document.querySelector('.modal-btn-3')
const modal3 = document.querySelector('.modal-overlay-3')
const closeBtn3 = document.querySelector('.close-btn-3')

modalBtn1.addEventListener('click', function(){
    modal1.classList.add('open-modal');
})

closeBtn1.addEventListener('click', function(){
    modal1.classList.remove('open-modal');
})

modalBtn2.addEventListener('click', function(){
    modal2.classList.add('open-modal');
})

closeBtn2.addEventListener('click', function(){
    modal2.classList.remove('open-modal');
})

modalBtn3.addEventListener('click', function(){
    modal3.classList.add('open-modal');
})

closeBtn3.addEventListener('click', function(){
    modal3.classList.remove('open-modal');
})