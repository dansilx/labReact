function getMonthName(monthIndex)
{
    const month = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    return month[monthIndex];
}

const now = new Date();

const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

const dayOfWeek = daysOfWeek[now.getDay()];

const dayOfMonth = now.getDate();

const monthName = getMonthName(now.getMonth());

const year = now.getFullYear();

const formattedDate = `${dayOfWeek}, ${dayOfMonth} de ${monthName} de ${year}.`;

document.getElementById('date-display').innerHTML = formattedDate;

