const form =  document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
//adiciona um ouvidor de evento nesse caso será o (click)
button.addEventListener("click", add)

form.addEventListener("change, save")
//ao clicar no botão ocorrerá essa função
function add() {
 const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
 const dayExists = nlwSetup.dayExists(today)
//Após o dia incluso para no return
if(dayExists) {
  alert("Dia já incluso")
  return
}
alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save( ) {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()