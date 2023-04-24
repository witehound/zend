import {  ReactNode } from "react"
import { UseFormRegister} from "react-hook-form"

export interface IInputesField {
    type: string,
    name: string,
    placeholder: string,
    required?: string | boolean,
    maxLength: number 
 
}

export interface IButton {
    type: "button" | "submit" | "reset" ,
    style: string,
    text : string
}

export interface IForm {
    style: string,
    children: ReactNode,
    formType? : RegisterFormFeilds | LoginFormFeilds
}

export type RegisterFormFeilds = {
    firstName : string,
    lastName: string,
    userName: string,
    password : string
}

export type LoginFormFeilds = {
    userName: string,
    password : string
}

