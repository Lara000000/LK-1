console.log('acync');

/* callback hell
tom1(cb => {
    tom2(cb => {
        tom3(cb => {
            tom4(cb => {
                'Lucke me'
            })
        })
    })
})
*/

/* Promise */

let promise1 = new Promise(function(resolve, reject) {    // принято, выполнено; неуспех, не принято
    setTimeout(function () {
        let n = Math.random(); // 0.0000000001 - 0.999999999999999999999999999
        if (n > 0.5) {
            resolve('Успех');
        } else {
            reject('Не успех');
        }
    }, 5000)
});

let promise2 = new Promise(function(resolve, reject) {
    let n = Math.random();
    if (n > 0.3) {
        resolve('Выполнено');
    } else {
        reject('Что-то пошло не так');
    }
})

promise1
    .then(function (data) {
        console.log(data);
        return promise2;
    })
    .then(result => {
        console.log(result);
    })
    // .then()   может быть неограниченно много
    // .then()
    .catch(err => {
        console.log(err);
    })
