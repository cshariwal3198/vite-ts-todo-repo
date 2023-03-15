import { TodoItem } from '../../model/todo-item.js'
import { IValueObject } from "../../utils/types"
import { returnRequiredObject } from '../../utils/util-functions.js'

export function localStore() {
    return {
               
        createTodoLocal: function (value: string) {
            const existingList = getTodoLocal()
            existingList.push(new TodoItem(value))
            setTodoLocal(existingList)
        },

        editTodoLocal: function (previousValue: string, newValue: string, isCompleted?: boolean) {
            const existingList = getTodoLocal()
            existingList.splice(existingList.indexOf(returnRequiredObject(previousValue, existingList)),
                1, new TodoItem(newValue, isCompleted))
            setTodoLocal(existingList)
        },

        deleteTodoLocal: function (name: string) {
            const existingList = getTodoLocal()
            existingList.splice(existingList.indexOf(returnRequiredObject(name, existingList)), 1)
            setTodoLocal(existingList)
        },

        deleteAllLocal: function () {
            setTodoLocal([])
        }

    }
}

export function getTodoLocal(): IValueObject[] {
    return JSON.parse(`${localStorage.getItem('todo') || []}`)
}

function setTodoLocal(taskValue: IValueObject[]) {
    localStorage.setItem('todo', JSON.stringify(taskValue))
}

