import { IValueObject } from "../utils/types";
import { createNewElement, appendElementToParent } from "../utils/util-functions";

const taskContainer = document.querySelector('.div-to-display') as HTMLDivElement;
const taskInputBlock = document.querySelector('.form-input') as HTMLInputElement;
const inputError = document.querySelector('#error-div') as HTMLDivElement;

function view() {
    return {

        prepareTask: function (value: IValueObject): void {
            let paragraphBlock = createNewElement('p');
            let span = createNewElement('span', value.name);
            appendElementToParent(paragraphBlock, span);
            appendElementToParent(paragraphBlock, createCheckBoxElement('change',));
            appendElementToParent(paragraphBlock, createDeleteButton('click',));
            appendElementToParent(paragraphBlock, createEditButton('click',));
            appendElementToParent(taskContainer, paragraphBlock);
        },

        showEmptyInputError: function (): boolean {
            if (!taskInputBlock.value) {
                inputError.innerHTML = '** please enter a task';
                return false;
            } else {
                inputError.innerHTML = '';
                return true;
            }
        }
    }
}

function createEditButton(event: string): HTMLButtonElement {
    const editButton = createNewElement('button', 'Edit') as HTMLButtonElement;
    editButton.addEventListener(event, ()=>console.log("edit"));
    return editButton;
}

function createDeleteButton(event: string,): HTMLButtonElement {
    const deleteButton = createNewElement('button', 'X') as HTMLButtonElement;
    deleteButton.addEventListener(event, ()=>console.log("delete"));
    return deleteButton;
}

function createCheckBoxElement(event: string,): HTMLInputElement {
    const check = createNewElement('input') as HTMLInputElement;
    check.type = 'checkbox';
    check.addEventListener(event,()=> console.log("check"));
    return check;
}

// const { deleteSingleTask, editSelectedTask, adjustCheckValue } = appController()
// const eventsHandlerFunctions = {

//     handleDelete: (deleteButton: HTMLElement, value: IValueObject) => () => {
//         deleteSingleTask((deleteButton.parentNode as HTMLElement), value)
//     },

//     handleEdit: (editButton: HTMLButtonElement, span: HTMLSpanElement, id?: number) => () => {
//         editSelectedTask(editButton, span, id)
//     },

//     handleCheck: (check: HTMLInputElement, value: IValueObject) => () => {
//         adjustCheckValue(check, value)
//     },
// }
// const { handleDelete, handleCheck, handleEdit } = eventsHandlerFunctions;

export { view } 