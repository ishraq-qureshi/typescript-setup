import { getFormData } from "./form";

const form = document.getElementById('myForm') as HTMLFormElement;

window.alert('Tesitng');

form.addEventListener("submit", function(e: SubmitEvent){
    e.preventDefault();
    const data = getFormData(form);
    console.log(data);
})