// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let massive=['el', 'ael', 'bel', 'cel', 'del', 'eel', 'fel', 'gel', 'hel', 'iel'];
console.log(massive)
console.log(massive[0]);
console.log(massive[1]);
console.log(massive[2]);
console.log(massive[3]);
console.log(massive[4]);
console.log(massive[5]);
console.log(massive[6]);
console.log(massive[7]);
console.log(massive[8]);
console.log(massive[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1= {
    title:'Just'+' '+'a'+' '+'title',
    pageCount: 300,
    genre: 'horror'
};

console.log(book1);

let book2= {
    title:'New'+' '+'title',
    pageCount: 500,
    genre: 'fantasy'
};

console.log(book2);

let book3= {
    title:'No'+' '+'sentiments',
    pageCount: 10000,
    genre: 'poetry'
};

console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let new_book_1= {
    title: 'Sadistic',
    pageCount: 100,
    genre: 'romance',
    authors: [
        {name: 'Bill'+' '+'Smith',age: 110},
        {name: 'Nine', age: 13}
    ]
};

console.log(new_book_1);

let new_book_2= {
    title: 'Given',
    pageCount: 300,
    genre: 'triller',
    authors: [
        {name: 'Charles'+' '+'Lee',age: 55},
        {name: 'Agendo'+' '+'Lalic', age: 28}
    ]
};

console.log(new_book_2);

let new_book_3= {
    title: 'Metamorph',
    pageCount: 150,
    genre: 'drama',
    authors: [
        {name: 'Barack'+' '+'Obama',age: 43},
        {name: 'Donald'+' '+'Tramp', age: 67}
    ]
};

console.log(new_book_3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача.

let user= [
    {name: 'George', username: 'NagibatorT100', password: 2301422},
    {name: 'Martin', username: 'MartinMe', password: 6666666},
    {name: 'Alice', username: 'Princess53', password: 12534643123},
    {name: 'Corney', username: 'AxenBot', password: 4214125325},
    {name: 'Lenny', username: 'Pistol35', password: 50493538456},
    {name: 'Antony', username: 'Antrius', password: 1039492371},
    {name: 'Sarah', username: 'NoFace', password: 4219382},
    {name: 'Lilith', username: 'DarkPig', password: 4392886},
    {name: 'Sun', username: 'Sunnnieee', password: 124932},
    {name: 'Greg', username: 'Greggie12', password: 903287923}
];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);