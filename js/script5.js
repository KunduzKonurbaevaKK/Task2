// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
//     **Пример: "Номер вашей карты: **********1245"**

let userCardNumber = prompt('Enter your credit card\'s number, please?');

let chars= '************';
let userCardNumberReplace = userCardNumber.replace(userCardNumber.slice(0, 12), chars);

console.log('Your card number: ' + userCardNumberReplace);

