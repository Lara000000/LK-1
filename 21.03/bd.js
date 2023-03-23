const box = document.querySelector(".box");
const link = "https://fakerapi.it/api/v1/persons?_quantity=9";
console.log(link);
const createCard = function(obj) {
    const card = document.createElement('div');
    card.className = 'card';
    card.classList.add(obj.gender);
    card.innerText = obj.firstname;
    box.append(card);
}

fetch(link)
.then(data => {
    return data.json();
})
.then(data => {
    console.log(data); //функцию createCard можно вызвать только здесь
    /* Для каждого пользователя массива data, который является свойством
    обЪекта data */
    for (let user of data.data) {
        createCard(user);
        }
})