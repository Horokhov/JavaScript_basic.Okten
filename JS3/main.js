// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let y = +prompt('Enter your value!');

    if (y !== 0) {
        console.log(true);
    }  else {
        console.log(false);
    }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// // let time = +prompt('Enter time between 0 and 59!');
// //
//     if (time>0 && time<=15) {
//         console.log('First quarter');
//     } else if (time>15 && time<=30) {
//         console.log('Second quarter');
//     }  else if (time>30 && time<=45) {
//         console.log('Third quarter');
//     } else if (time>45 && time<=59) {
//         console.log('Fourth quarter');
//     } else {
//         console.log('Fatal error');
//     }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

 let day= +prompt('Enter day between 1 and 31!');
    if (day>0 && day<=10) {
        console.log('First decade');
    }  else if (day>10 && day<=20) {
        console.log('Second decade');
    }  else if (day>20 && day<=31) {
        console.log('Third decade');
    }  else {
        console.log('Fatal error');
    }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

    let week = +prompt('Enter a number of day in the week!')
    switch (week) {
        case 1 : console.log('Monday:you need to work!');
        break;
        case 2 : console.log('Tuestay:you need to work harder!');
        break;
        case 3 : console.log('Wednesday:you need to work harder even more!');
        break;
        case 4 : console.log('Thursday:More means more!');
        break;
        case 5 : console.log('Friday:listen to me please!');
        break;
        case 6 : console.log('Saturday:we have a plan!');
        break;
        case 7 : console.log('Sunday:delete me!');
        break;
        deafult: console.log('Fatal error');
    }

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

let a= +prompt('Enter your first value!');
let b= +prompt('Enter your second value');
if (a>b) {
    console.log(a);
} else if (a<b) {
    console.log(b);
} else if (a==b) {
    console.log('Equal values');
} else {
    console.log(NaN);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default",
// якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false).
  let x= prompt('Enter value for x!') || false;
    if (x!==false) {
        console.log(true);
    } else {
        console.log(false);
    }

