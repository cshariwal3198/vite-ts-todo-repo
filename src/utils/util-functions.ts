import { OptionObject } from "../model/option-object";
import { IValueObject } from "./types";

export function createNewElement(elementName: string, text?: string): HTMLElement {
    const newElement = document.createElement(elementName);
    text && (newElement.innerText = text);
    return newElement;
}

export async function setTodoCloud(apiURL: string, options: OptionObject) {
    return await fetch(apiURL, options)
}

export function returnRequiredObject(name: string, existingList: IValueObject[]): IValueObject {
    const resultArray = existingList.filter(task => {
        if(task.name === name) return task;
    })
    return resultArray[0]
}

export function appendElementToParent(parent: HTMLElement, child: HTMLElement): void {
    parent.appendChild(child);
}