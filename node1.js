const toggles=document.querySelectorAll('.faq-toggle')
toggles.forEach(toggel=>{
    toggel.addEventListener('click',()=>{
        toggel.parentNode.classList.toggle('active')
    })
})