import { ButtonHTMLAttributes } from 'react'




interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  model: "small" | "medium" | "large"
}

export function Button({ model, ...rest }: ButtonProps) {

  return model === 'small' ?
    (
      <button className="bg-green-500 py-2 px-4 text-white text-sm font-bold rounded-md hover:bg-green-300" { ...rest}>
      
      </button>
    ) :
    model === 'medium' ?
      (
    <button className="bg-green-500 py-3 px-4 w-full text-white text-md font-bold rounded-md hover:bg-green-300" { ...rest}>

        </button>
      ) :
      (
        <button className="bg-green-500 py-8 px-4 text-white font-bold rounded-md hover:bg-green-300" { ...rest}>
  

        </button>
      )


}