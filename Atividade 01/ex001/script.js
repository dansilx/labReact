document.getElementById("form").addEventListener('submit', function(event) {
    event.preventDefault()

    const btn = document.getElementById("btn")
    const input = document.getElementById("number").value
    const number = Number(input)

    if (!Number.isInteger(number) || number <= 0) {
        alert("Número incorreto!")
    }

    if (number % 2 == 0)
        { 
            alert("Número par!")
        }
        else 
        { 
            alert("Número ímpar!")
        }
})