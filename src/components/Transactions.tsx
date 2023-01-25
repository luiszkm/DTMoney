import { useContext, useEffect, useState } from "react"
import { ConvertCents } from "../utils/ConvertCents";
import { TransactionsContext } from "../contexts/transactionContext";




export function Transactions() {
 
const { transactions} = useContext(TransactionsContext)
  



  return (

    <table className="w-full hidden border-separate border-spacing-y-1 md:table ">

      <tbody className="w-full  gap-2 ">

        {
          transactions &&
          transactions.map(transaction => {
            return (
              <tr key={String(transaction.id)}
              className="text-gray-300 w-full bg-gray-700  ">
                <td className="w-1/2 px-8 py-5 rounded-tl-md rounded-bl-md  ">{transaction.description}</td>
                <td className={
                  transaction.type === 'income' ?
                    "text-green-300 px-8 py-5 " :
                    "text-red-500 px-8 py-5"} >R$ {ConvertCents(transaction.price)}</td>
                <td className="text-center">{transaction.type}</td>
                <td className="px-8 py-5  text-right rounded-tr-md rounded-br-md  ">{transaction.createdAt}</td>
              </tr>
            )
          })
        }



      </tbody>
    </table>

  )

}