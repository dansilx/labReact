const btn = document.getElementById("btn")

btn.addEventListener('click', function(event) {
    event.preventDefault()

    const input = document.getElementById("inputData").value.trim()
    
    if(confirm("Deseja verificar qual é o tipo de dado digitado?")) 
    {
        alert("O tipo de dado é " + typeof(input))
    } 
    else
    {
        alert("Obrigado por visitar essa página!")
    }
})