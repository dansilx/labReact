const btn = document.getElementById("btn")

btn.addEventListener('click', function(event) {
    event.preventDefault()

    const input = document.getElementById("number").value
    const number = Number(input)

    if (!Number.isInteger(number) || number <= 0) 
    {
        alert("Insira um numero inteiro e positivo!")
        return
    }
    else if (isPrime(number))
    { 
        alert(`${number} é um número primo!`)
    }
    else
    {
        alert(`${number} não é um número primo!`)
    }
})

function isPrime(num) {
    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    
    for(let div = 2; div < num; div++) {
        if (num % div === 0)
            return false
    }
    return true
}