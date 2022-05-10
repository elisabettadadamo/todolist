document.querySelector('#add')
.addEventListener('click', function(){
    
    var valore = document.querySelector('#testo').value
    var target = document.querySelector('#lista')
    
    var li = document.createElement('li')
    li.innerText = valore
    li.classList.add('todo')
    
   

   

    li.addEventListener('click', function(){
        li.remove()
        let indice = elementiSalvati.indexOf(valore)
        elementiSalvati.splice(indice, 1)

        localStorage.setItem('lista', JSON.stringify(elementiSalvati))
    })
    
    target.prepend(li)         
    
    document.querySelector('#testo').value = ''
  


    var listaVecchia = localStorage.getItem('lista')
    var db = listaVecchia == null ?[] : JSON.parse(listaVecchia)
    db.push(valore)
    localStorage.setItem('lista', JSON.stringify(db))
})














function creaHtml(){
let elementiSalvati = JSON.parse(localStorage.getItem('lista') )
elementiSalvati.forEach(function(elemento){

    var target = document.querySelector('#lista')
    
    var li = document.createElement('li')
    li.innerText = elemento
    li.classList.add('todo')
    
    li.addEventListener('click', function(){
        li.remove()
        let indice = elementiSalvati.indexOf(elemento)
        elementiSalvati.splice(indice, 1)

        localStorage.setItem('lista', JSON.stringify(elementiSalvati))

    })
    
    target.prepend(li) 
}) 
}



function creaHTML(){

let elementiSalvati = localStorage.getItem('lista')
let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

db.forEach(function(elemento){
let li = document.createElement('li')

li.innerText = elemento

document.querySelector('#lista').append(li)

li.addEventListener('click', function(){
li.remove()
elimina(elemento)

})
})

}
creaHTML()

function elimina(testo){
let elementiSalvati = localStorage.getItem('lista')
let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
let indice = db.indexOf(elemento)
db.splice(indice,1)
localStorage.setItem('lista', JSON.stringify(db))



}
elimina(testo)


