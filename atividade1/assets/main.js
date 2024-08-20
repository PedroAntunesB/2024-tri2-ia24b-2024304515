//cria uma constante q recebe todos os botões com a classe toggle-nav 
const btstogglenav = document.querySelectorAll("button.toggle-nav")
//a constante nv recebe a tag do html chamada nav
const nv = document.querySelectorAll("nav")

//adiciona uma função q para cada botão com a constante btstogglenav ele vai adicionar um evento de click q irá executar a função de alternar da classe closed para a classe open
btstogglenav.forEach(function(bt){
    bt.addEventListener('click', function(){
    nv.classList.toggle('open')
} )
})