const person = {
    name: 'Ankush',

    __proto__: {
        name: 'Simran'
    }

}

const student = Object.create(person);

console.log(student.__proto__);
