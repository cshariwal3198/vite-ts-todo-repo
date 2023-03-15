import { TodoItem } from '../../model/todo-item.js'
import { OptionObject, optionHeader } from '../../model/option-object.js'
import {todoApiURL, deleteApiURL} from '../../main'

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
