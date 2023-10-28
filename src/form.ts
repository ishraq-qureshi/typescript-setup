import { inputData } from "./types";
import * as loadash from "loadash";

export const getFormData = (html: HTMLFormElement) => {
    const inputs = html.querySelectorAll('input');

    const values : inputData = {}

    inputs.forEach((input: HTMLInputElement) => {
        if(input.type != "submit") {
            values[input.name] = input.value;
        }
    });

    return values;
}