var car = {
    "model": "Dodge",
    "year": 1967,
    "color": "red",
    "body": "Hard top"
}

for (let j in car) {
    const element = document.getElementById(j);
    if (element) {
        element.innerHTML = (car[j]);
    }
}