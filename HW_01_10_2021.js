//Задача № 1 Получить верное значение округления
let numOne = Math.ceil((1.005 * 100) / 100);
console.log(numOne);

//Задача № 2 Получить число 135.58 из строки
let value = '135.58px';
console.log(parseFloat(value));

//Задача № 3 Построить верное условное ветвление
let value2 = 58 + "Фрилансер";
if (isNaN(Number(value2))) {
    console.log('Результат выражения NaN')
}

//Задача № 4 Найти максимальное значение
console.log('Максимальное значение:'+ Math.max(10,58,39,-150,0));

//Задача № 5 Округлить число 58.858 до числа 58
console.log(Math.floor(58.858));


//Задача № 1 Верна ли запись (Нет, двойные кавычки необходимо заменить на обратные)
let fls = "фрилансер";
let text =`Привет! Я ${fls}`;
console.log(text);
//Задача № 2 Получить символ "н" строки
let text2 = 'фрилансер';
console.log(text2[5]);
//Задача № 3 Верно?
let text3 = 123 + "456";
// не верно, так как 123 преобразуется в
// строку и просто обьеденится со строкой 456

//Задача № 4 Получить строку в верхнем регистре
let text4 = 'фрилансер';
console.log(text4.toUpperCase());

//Задача № 5 Получить подстроку "лан" из:
let text5 = 'фрилансер';
console.log(text5.slice(3,6));

//Задача № 6 true или false?
let text6 = 'фрилансер';
console.log(text6.includes('лан', 4));
//false так как строка не содержит символа "4"

