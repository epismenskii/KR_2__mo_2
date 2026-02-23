console.log("Задание 2:");


var test = Number(prompt("Введите баллы за тест (max: 50):"));
if (isNaN(test)) {
    console.log("Пожалуйста, введите число.");
    test = Number(prompt("Введите баллы за тест (max: 50):"));
}   
else if (test > 50 || test < 0) {
    console.log("Баллы за тест не могут быть больше 50 или меньше 0. Введите корректное число.");
    test = Number(prompt("Введите баллы за тест (max: 50):"));
}

var dz = Number(prompt("Введите баллы за Домашнее задание (max:30):"));
if (isNaN(dz)) {
    console.log("Пожалуйста, введите число.");
    dz = Number(prompt("Введите баллы за Домашнее задание (max:30):"));
}
else if (dz > 30 || dz < 0) {
        console.log("Баллы за Домашнее задание не могут быть больше 30 или меньше 0. Введите корректное число.");
        dz = Number(prompt("Введите баллы за Домашнее задание (max:30):"));
    }

var attend = Number(prompt("Введите баллы за посещаемость (max: 20):"));
if (isNaN(attend)) {
    console.log("Пожалуйста, введите число.");
    attend = Number(prompt("Введите баллы за посещаемость (max: 20):"));
}
else if (attend > 20 || attend < 0) {
        console.log("Баллы за посещаемость не могут быть больше 20 или меньше 0. Введите корректное число.");
        attend = Number(prompt("Введите баллы за посещаемость (max: 20):"));
    }

var total = test + dz + attend;

if (total >= 90) {
    console.log("Отлично! Ваша оценка:" + total);
}
else if (total >= 75 && total < 89) {
    console.log("Хорошо! Ваша оценка:" + total);
}
else if (total >= 60 && total < 74) {
    console.log("Удовлетворительно! Ваша оценка:" + total);
}
else if (total < 60) {
    console.log("Неудовлетворительно! Ваша оценка:" + total);
}
else if (total > 100 || total < 0) {
    console.log("Общая сумма баллов не может быть больше 100 или меньше 0. Введите корректные числа.");
}

console.log("_______________");
console.log("Задание 3:");


var numbers = [5, 12, 8, 130, 44, 2, 9];

console.log(numbers);

console.log("Числа больше 10: ")

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) 
        console.log(numbers[i]);
    }

var summ = 0; 
for (var i=0; i < numbers.length; i++) {
    summ += numbers[i];
}
console.log("Сумма чисел: " + summ);

var quantity = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        quantity = quantity + 1;
    }
}
console.log("Количество чисел больше 10: " + quantity);