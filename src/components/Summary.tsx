import { useContext } from "react";

import { TransactionsContext } from "../contexts/transactionContext";

import { ConvertCents } from "../utils/ConvertCents";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";



export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type==='income') {
      acc.income += transaction.price
      acc.total += transaction.price
    }else {
      acc.outcome += transaction.price
      acc.total -= transaction.price
    }



    return acc
  },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  );


  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-3 items-center gap-8 -mt-20">
      <div className="bg-gray-600 w-full p-6 pb-8 flex flex-col items-start gap-3 rounded-md">

        <div className="flex w-full items-center justify-between">
          <span className="text-gray-300">Entradas</span>
          <ArrowCircleUp size={32} className="text-green-500" />
        </div>
        <div>
          <h2 className="text-gray-100 font-bold text-xl">R$ {ConvertCents(summary.income)}</h2>
          <small className="text-gray-500">Ultima entrada </small>
        </div>
      </div>
      <div className="bg-gray-600 w-full   md:max-w-[352px] p-6 pb-8 flex flex-col items-start gap-3 rounded-md">
        <div className="flex w-full items-center justify-between">
          <span className="text-gray-300">Saídas</span>
          <ArrowCircleDown size={32} className="text-red-300" />
        </div>
        <div>
          <h2 className="text-gray-100 font-bold text-xl">{ConvertCents(summary.outcome)}</h2>
          <small className="text-gray-500">Ultima entrada </small>
        </div>
      </div>
      <div className="bg-green-700 w-full md:max-w-[352px] p-6 pb-8 flex flex-col items-start gap-3 rounded-md">
        <div className="flex w-full items-center justify-between">
          <span className="text-gray-300">Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </div>
        <div>
          <h2 className="text-gray-100 font-bold text-xl">{ConvertCents(summary.total)}</h2>
          <small className="text-gray-500">Ultima entrada </small>
        </div>
      </div>

    </div>
  )
}