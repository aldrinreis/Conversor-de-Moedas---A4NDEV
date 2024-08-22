//Obtendo os elementos
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// COTAÇÃO DAS MOEDAS

const USD = 4.87
const EUR = 5.32
const GBP = 6.08



// Recuperando o valor digitado no input
// manipulando o input pra receber só números
amount.addEventListener("input", () =>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")

})

// Capturando o submit do form
form.onsubmit = (event) => {
    event.preventDefault()
    switch (currency.value){
        case "USD" : 
            convertCurrency(amount.value,USD,"US$")
            break
        case "EUR":
            convertCurrency(amount.value,EUR,"€")
            break
        case "GBP":
            convertCurrency(amount.value,GBP,"£")
            break
    }

}

/**
 * Função para realizar a conversão das moedas
 * @param {Number} amount 
 * @param {Number} price 
 * @param {String} symbol 
 */

// Função para converter

function convertCurrency (amount, price, symbol){

    //exibindo o footer
    try {
        //exibindo a contação
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price
        if (isNaN(total)){
            return alert("Por favor informe um valor corretamente")
        }

        total = formatCurrencyBRL(total).replace("R$","")

        //exibindo o resultado

        result.textContent = `${total} Reais`

        footer.classList.add("show-result")
        
        //em caso de erro não mostrar o footer
    } catch (error) {
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
        
    }

}

/**
 * Converte para número para utilizar o toLocalString para formatar no padrão BRL
 * 
 * @param {*} value 
 * @returns 
 */
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",
    })
}