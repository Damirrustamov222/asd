let users = [
    {
        name: "Vlad",
        age: 16,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Damir",
        age: 13,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Akbar",
        age: 15,
        isMarried: true,
        country: "Thailand",
    },
    {
        name: "Samir",
        age: 12,
        isMarried: true,
        country: "North Korea",
    },
    {
        name: "Shoxrux",
        age: 18,
        isMarried: false,
        country: "India",
    },
    {
        name: "Farzod",
        age: 20,
        isMarried: true,
        country: "UAE",
    },
];

let maxAge = 0;
let minAge = Infinity;
let oldestUser
let youngestUser

users.forEach((user) => {
    if (user.age > maxAge) {
        maxAge = user.age;
        oldestUser = user;
    }

    if (user.age < minAge) {
        minAge = user.age;
        youngestUser = user;
    }
});

console.log("Oldest User:", oldestUser);
console.log("Youngest User:", youngestUser);
