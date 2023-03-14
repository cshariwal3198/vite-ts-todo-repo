import { TodoItem } from '../../model/todo-item.js'
import { IValueObjectType, OptionHeaderType } from '../../utils/types'
import config from '../../config.json'

const {todoApiURL, deleteApiURL} = config

const optionHeader: OptionHeaderType = {
    "Content-type": "application/json",
}

class OptionObject {
    method;
    body;
    headers;

    constructor(method: string, body?: IValueObjectType, header?: OptionHeaderType) {
        this.method = method;
        this.body = JSON.stringify(body);
        this.headers = header;
    }
}

export function cloudStore() {
    return {
        getTodoCloud: async function () {
            return (await fetch(todoApiURL)).json()
        },

        postMethod: async function (value: string) {
            return (await setTodoCloud(todoApiURL, new OptionObject('POST',
                new TodoItem(value), optionHeader))).json()
        },

        putMethod: async function (index: number, editedValue: string, isCompleted: boolean = false) {
            return await setTodoCloud(`${todoApiURL}/${index}`,
                new OptionObject('PUT', new TodoItem(editedValue, isCompleted, index), optionHeader))
        },

        deleteMethodCloud: async function (index: number) {
            return setTodoCloud(`${todoApiURL}/${index}`, new OptionObject('DELETE'))
        },

        deleteAllCloud: async function () {
            return await setTodoCloud(deleteApiURL, new OptionObject('DELETE'))
        },
        
    }
}

async function setTodoCloud(apiURL: string, options: OptionObject) {
    return await fetch(apiURL, options)
}
