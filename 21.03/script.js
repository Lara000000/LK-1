// console.log(1);

// setTimeout(function() {  // выполняется после всего остально кода
//     console.log(2);
// }, 0);

// setTimeout(function() {  
//     console.log(3);
// }, 0);



// console.log(4); // 1423

// let foo = function() {
//     console.log('foo');
// }

// let bar = function() {
//     console.log('bar');
//     foo();
// }

// let baz = function() {
//     console.log('baz');
//     bar();
// }

// baz();  // baz => bar => foo   


let foo = function() {
    setTimeout(function() {
        console.log('foo');
    }, 1000);
    console.log('1');
}

let bar = function() {
    setTimeout(function() {
        console.log('bar');
    }, 2000);
    foo();
    console.log('2');
}

let baz = function() {
    setTimeout(function() {
        console.log('baz');
    }, 3000);
    bar();
    console.log('3');
}

baz(); //1 2 3 foo bar baz
