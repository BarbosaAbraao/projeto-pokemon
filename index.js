const mostrar = document.querySelector('.mostrar')
const pokemon = document.querySelectorAll('.pokemon:not(ativo)')
mostrar.addEventListener('click',()=>{
    pokemon.forEach(pokemon =>{
        pokemon.classList.add('ativo')
    })

    mostrar.classList.add("remover")
})
