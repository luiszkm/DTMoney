import { MagnifyingGlass } from "phosphor-react";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const searchFormSchema = z.object({
  query: z.string(),
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    try{
      await new Promise(resolve => setTimeout(resolve,2000))
      
      console.log(data);

    }catch{}
    
    

  }
  return (
    <form onSubmit={handleSubmit(handleSearchTransactions)}
      className="flex items-center gap-4 justify-between mt-16 mb-6">
      <input className="p-4 w-full bg-gray-900 rounded-md outline-none text-gray-300 placeholder:text-gray-500 focus:outline-green-300"
        placeholder="Busque uma transação" {...register('query')} />
      <button disabled={isSubmitting}
       className="flex px-8 py-4 items-center gap-3 font-bold text-green-300 border border-green-300 rounded-md 
 hover:text-white hover:bg-green-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:bg-green-700 ">Buscar
        <MagnifyingGlass size={20} />
      </button>
    </form>
  )
}