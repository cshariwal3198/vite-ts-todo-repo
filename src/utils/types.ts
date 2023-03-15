export interface IValueObject{
    name : string,
    isCompleted? : boolean,
    id? : number
}

export type OptionHeader = {
    [key : string] : string
}