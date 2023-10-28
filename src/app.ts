import { getFormData } from "./form";

const form = document.getElementById('myForm') as HTMLFormElement;

form.addEventListener("submit", function(e: SubmitEvent){
    e.preventDefault();
    const data = getFormData(form);
    console.log(data);
})
debugger;
const person: any = {}

console.log(person.speak());