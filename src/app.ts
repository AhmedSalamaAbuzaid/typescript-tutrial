import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/listTemplate.js";


// let docOne : HasFormatter;
// let docTwo : HasFormatter;

// docOne = new Invoice('yoshi', 'we work', 200)
// docTwo = new Payment('mario', 'we work', 200)

// let doc :HasFormatter[] = [];
// doc.push(docOne)
// doc.push(docTwo)
// console.log(doc);

const invOne = new  Invoice("mario","work on mario website", 250)
const invTwo = new  Invoice("luigi","work on luigi website", 350)

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)
invoices.map(inv => {
    console.log(inv.amount , inv.client);
})

// invOne.client = 'yoshi';
invOne.amount = 400;



// console.log(invTwo.Format() , invTwo);

let anchor = document.querySelector("a")!


let form = document.querySelector(".new-item-form") as HTMLFormElement ;
let type = document.querySelector("#type") as HTMLSelectElement;
let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
let details = document.querySelector("#details") as HTMLInputElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul") as HTMLUListElement;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter;

    if (type.value === "invoice"){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber)
    }

    list.render(doc, type.value ,'end')
})

// generic
const addUID =<T extends {name:string}> (obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne.name);

// eith interfaces
interface Resource <T> {
    uid: number;
    resources: string;
    data: T;
}

const docThree: Resource <object> = {
    uid: 1,
    resources: "ahmed",
    data: {name: 'shaun'},
} 






interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(s: number): number;
}

const me : IsPerson = {
    name: "ahmed",
    age: 30, 
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spend',amount);
        return amount
    }
};

const greetPerson = (person: IsPerson) => {
    console.log(person.name);
}
// greetPerson(me)