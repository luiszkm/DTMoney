import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";




export function Summary() {

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-3 items-center gap-8 -mt-20">
      <div className="bg-gray-600 w-full p-6 pb-8 flex flex-col items-start gap-3 rounded-md">
        
        <div className="flex w-full items-center justify-between">
          <span className="text-gray-300">Entradas</span>
            <ArrowCircleUp size={32} className="text-green-500" />
        </div>
        <div>
        <h2 className="text-gray-100 font-bold text-xl">R$ 20.000,00</h2>
       <small className="text-gray-500">Ultima entrada </small>
        </div>
      </div>
      <div className="bg-gray-600 w-full   md:max-w-[352px] p-6 pb-8 flex flex-col items-start gap-3 rounded-md">
        <div className="flex w-full items-center justify-between">
          <span className="text-gray-300">Entradas</span>
            <ArrowCircleDown  size={32} className="text-red-300" />
        </div>
        <div>
        <h2 className="text-gray-100 font-bold text-xl">R$ 20.000,00</h2>
       <small className="text-gray-500">Ultima entrada </small>
        </div>
      </div>
      <div className="bg-green-700 w-full md:max-w-[352px] p-6 pb-8 flex flex-col items-start gap-3 rounded-md">
        <div className="flex w-full items-center justify-between">
          <span className="text-gray-300">Entradas</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </div>
        <div>
        <h2 className="text-gray-100 font-bold text-xl">R$ 20.000,00</h2>
       <small className="text-gray-500">Ultima entrada </small>
        </div>
      </div>
    
    </div>
  )
}