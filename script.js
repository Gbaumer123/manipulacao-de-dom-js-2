const form = document.querySelector('form')

form.onsubmit = function(event){
    event.preventDefault()
}

form.addEventListener('submit', function(event){
    event.preventDefault()
})


form.addEventListener('submit', function(event){
    console.log('qualquer coisa')
})
