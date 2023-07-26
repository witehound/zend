import {  ReactNode } from "react"

export interface IInputesField {
    type: string,
    name: string,
    placeholder: string,
    required?: string | boolean,
    maxLength : number 
}

export interface IButton {
    type: "button" | "submit" | "reset" ,
    style: string,
    text : string
}

export interface IForm {
    style: string,
    children : ReactNode
}