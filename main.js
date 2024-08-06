/*Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі: Число N є простим числом, 
якщо число N просте, та Число N не є простим числом, якщо число N складене.*/
/*let number = +prompt("Введіть N для перевірки на просте число:");
let isPrime = true;
if (number <= 1 || (number > 2 && number % 2 === 0)){
    isPrime = false;
}
else {
   for (let i = 3; i < number; i++){
    if (number % i === 0) {
        isPrime = false;
        break;
        }
    }
}
if (isPrime) {
    console.log("Число" ,number, "є простим числом");
}else{
    console.log("Число" ,number, "не є простим числом");
}*/




/*Вам необхідно написати програму, яка приймає на вхід число 
N і знаходить усі числа в діапазоні від 1 до N, які є досконалими числами.*/
/*let number = +prompt("Введіть N для пошуку в діапазоні від 1 до N досконалих чисел:");
let perfectNumbers = [];
for(let i = 1; i <= number; i++){
    let sum = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            sum += j;
        }
    }
    if (sum === i && i > 1) {
        perfectNumbers.push(i);
    }
}
if (perfectNumbers.length > 0) {
    console.log("В діапазоні від 1 до", number, "є такі досконалі числа:", perfectNumbers);
} else {
    console.log("В діапазоні від 1 до", number, "немає досконалих чисел.");
}*/



/*Вам необхідно написати програму, яка приймає на вхід число, 
що буде висотою вашої ялинки. Уся ялинка має бути реалізована одним рядком*/
/*let number = +prompt("Введіть N для визначення висоти ялинки:");
for(let i = 1; i <= number; i++){
    let leftSpace = " ";
    for (let j = 1; j <= number - i; j++){
        leftSpace += ' ';
    }

    let stars = "*";
    for (let k = 1; k <= 2 * i - 1; k++){
        stars += "*";
    }
    console.log(leftSpace + stars);
}
*/