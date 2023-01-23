import {InputHTMLAttributes} from 'react'


interface InputProps extends  InputHTMLAttributes <HTMLInputElement>{

}

export function Input ({...rest}:InputProps) {

  return(
    <input className="p-4 w-full bg-gray-900 rounded-md outline-none text-gray-300 placeholder:text-gray-500 focus:outline-green-300" 
    type="text" {...rest} />
  )
}