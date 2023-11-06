const main = document.querySelector('main');
const right = document.querySelector('.right-slide');
const left = document.querySelector('.left-slide');

console.log(right)
right.addEventListener('click',e =>{
    main.style.scrollBehavior = 'smooth'
    main.scrollLeft += 1280

})
left.addEventListener('click',e =>{
    main.style.scrollBehavior = 'smooth'

    main.scrollLeft -= 1280
    
})