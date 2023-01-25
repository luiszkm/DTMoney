
interface TabBarProps {
  
    name?: string
    value?: number
    date?: Date
  
}

export function TabBar({value = 1}:TabBarProps) {


  return (
    <section className="w-full p-2 flex flex-col items-center gap-3 md:hidden">
      <div className="w-full h-36 rounded-md p-5 flex items-start flex-col gap-3 bg-gray-700">
        <div className="flex flex-col gap-3  font-bold">
          <span className="text-gray-400">Desenvolvimento de site</span>
          <span className={value >0 ?"text-green-300" : "text-red-300"}>
            {value > 0 ? `R$ ${value}` : `- R$ ${value}`}
          </span>
        </div>
        <div className="flex w-full items-center justify-between text-gray-500">
          <span>Venda</span>
          <span>22/01/2023</span>
        </div>
      </div>
   
    </section>
  )
}