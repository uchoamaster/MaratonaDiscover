Modal = {
    toggle(){
        //Abrir Modal
        //Adicionar a class active ao modal
        //alert("Abri o Modal!!")
        document.querySelector('.modal-overlay')
        .classList.toggle('active');
    // },
    // close(){
    //     //Fechar o Modal
    //  //remover a class active do modal
    //  document.querySelector('.modal-overlay')
    //     .classList.remove('active');
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
},
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
},
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
},
    {
        id: 4,
        description: 'App',
        amount: 20000,
        date: '23/01/2021',
},
]


//Eu preciso somar as entradas
//depois eu preciso somar as saídas e
//remover das entradas o valor das saídas
//assim eu terei o total

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses(){
        //somar as saidas
    },
    total(){
        //entradas - saidas
    }
}

//SUBSTITUIR OS DADOS DO HTML COM OS DADOS DO JS 

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index){
        //console.log(transaction)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
       // console.log(tr.innerHTML)

    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
                <td class="description">${transaction.description}</td>
                <td class="${CSSclass}">${transaction.amount}</td>
                <td class="date">${transaction.date}</td>
                <td>
                    <img src="./assets/minus.svg" alt="Remover Transação">
                </td>
        `
        return html
    }
}

const Utils = {
    formatCurrency(value){
        //console.log(value)
        const signal = Number(value) < 0 ? "-" : ""
    }
}

// DOM.addTransaction(transactions[0])
// DOM.addTransaction(transactions[1])
// DOM.addTransaction(transactions[2])

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})

