export interface IValueObjectType{
    name : string,
    isCompleted? : boolean,
    id? : number
}

export type OptionHeaderType = {
    [key : string] : string
}