 // switch case
 let count = 20;
switch(count) {
    case 1:
        console.log("count is 1");
        break;
    case 20:
        console.log("count is 20");
        break;
    case 3:
        console.log("count is 3");
        break;
    default:
        console.log('default');
}

let greet = 'здравствуйте';
switch (greet) {
    case 'привет':
        console.log('вежливость 0');
        break;
    case 'здравствуйте':
        console.log('вежливость 100');
        break;
    default:
        console.log('default');
}

let count2 = 15;
switch (count2) {
    //case (13 || 14 || 15);
    case 13:
    case 14:
    case 11:
        console.log('13 || 14 || 15');
        break;
    default:
        console.log('def')
}

//циклы
 // for     for in    for of     while     do while
 // выражение с + 1 можно записать как c++;
 // выражение с - 1 можно записать как c--;
 // выражение с + 5 можно записать как c+=5;
 // выражение с - 5 можно записать как c-=5;
 // ++с  --с //текущее обращение к переменной даст +1
// let counter = 0;
//while (true) {
//  console.log('1');
//    counter++;

 //   if (counter === 5) {
//       break;
//    }
 //}

// let counter2 = 0;
// do {
//     console.log('doing');
//     counter2++;
 //} while (counter2 < 5);

// for(старт иттерации; условие пока работает цикл;
 // действие на каждой иттерации)
 let count = 0;
for(let i = 0; i <= 5; i++) {
    console.log('foring');
    count++;
}


