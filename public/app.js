import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
// let docOne : HasFormatter;
// let docTwo : HasFormatter;
// docOne = new Invoice('yoshi', 'we work', 200)
// docTwo = new Payment('mario', 'we work', 200)
// let doc :HasFormatter[] = [];
// doc.push(docOne)
// doc.push(docTwo)
// console.log(doc);
const invOne = new Invoice("mario", "work on mario website", 250);
const invTwo = new Invoice("luigi", "work on luigi website", 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.map(inv => {
    console.log(inv.amount, inv.client);
});
// invOne.client = 'yoshi';
invOne.amount = 400;
// console.log(invTwo.Format() , invTwo);
let anchor = document.querySelector("a");
let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let tofrom = document.querySelector("#tofrom");
let details = document.querySelector("#details");
let amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// generic
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
const docThree = {
    uid: 1,
    resources: "ahmed",
    data: { name: 'shaun' },
};
const me = {
    name: "ahmed",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log(person.name);
};
// greetPerson(me)
