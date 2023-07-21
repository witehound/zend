export interface IInputesField {
    type: string,
    name: string,
    placeholder: string,
}

export interface IButton {
    type: "button" | "submit" | "reset" ,
    style: string,
    text : string
}