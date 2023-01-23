import { MagnifyingGlass } from "phosphor-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Summary } from "./components/Summary";
import { Transactions } from "./components/Transactions";
import { TabBar } from "./components/TabBar";


export function App() {


  return (
    <div className="min-h-screen flex flex-col items-center mx-auto my-0 w-full bg-gray-800 relative">
      <Header />
      <div className="max-w-6xl w-full">
      <Summary />
      <div className="flex items-center gap-4 justify-between mt-16 mb-6">
        <Input placeholder="Busque uma transação" />
        <button className="flex px-8 py-4 items-center gap-3 font-bold text-green-300 border border-green-300 rounded-md
         hover:text-white hover:bg-green-300">Buscar 
        <MagnifyingGlass size={20}  />
        </button>
      </div>
      <Transactions />
      <TabBar />
      </div>
   
    </div>
  )
}


