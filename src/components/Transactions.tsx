
interface TransactionsProps {
 
    money?: "exit" | "entry"
  
}


export function Transactions({ money = 'entry' }: TransactionsProps) {



  return (
   
      <table className="w-full hidden border-separate border-spacing-y-1 md:table ">
        
        <tbody className="w-full  gap-2 ">
          <tr className="text-gray-300 w-full bg-gray-700  ">
            <td className="w-1/2 px-8 py-5 rounded-tl-md rounded-bl-md  ">Salário</td>
            <td className={
              money === 'entry' ?
                "text-green-300 px-8 py-5 " :
                "text-red-500 px-8 py-5"} >R$ 20.00</td>
            <td className="text-center">Venda</td>
            <td className="px-8 py-5  text-right rounded-tr-md rounded-br-md  ">23/02/2023</td>
          </tr>
          
          <tr className="text-gray-300 w-full bg-gray-700  ">
            <td className="w-1/2 px-8 py-5 rounded-tl-md rounded-bl-md  ">Salário</td>
            <td className={
              money === 'exit' ?
                "text-green-300 px-8 py-5 " :
                "text-red-500 px-8 py-5"} >R$ 20.00</td>
            <td className="text-center">Venda</td>
            <td className="px-8 py-5  text-right rounded-tr-md rounded-br-md  ">23/02/2023</td>
          </tr>

         
        </tbody>
      </table>

  )

}