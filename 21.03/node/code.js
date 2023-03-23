// Пример работы асинхронного кода. Будет работать в интерпритаторе Node js, но не будет работать в браузере
const fs = require("fs");

// fs.readFile("./text.txt", "utf-8", function(err, result) {
//     console.log(result);
// })

//console.log(result); Нельзя вызвать вне функции чтения файлаБ так как чтение еще не завершено

let strings = [];
fs.readFile("./text.txt", "utf-8", function(err, result) {
    if (!err) {
        let line = "";
        for (let i = 0; i < result.length; i++) {
            if (result[i] === "\r" || result[i] === "\n") {   // в macOC нет \r(признак конца строки), поэтому используем перенос строки \n
                strings.push(line);
                line = "";
            } else {
                line += result[i];
            } 
        }
        strings.push(line);
        console.log(strings); //Обрабатывать strings не выходя в глобальную область видимости.
    }
})

// setTimeout(function() {
    // console.log(strings);  // так не делать, strings не может быть вызвана, пока весь код не отработает
// }, 0);